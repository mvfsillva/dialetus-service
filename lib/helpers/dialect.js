const merge = require('deepmerge')
const dialects = require('../../dialects')

const find = (region, slugParam) => {
  if (dialects[region]) {
    const dialect = dialects[region].find(({ slug }) => slug === slugParam)

    return dialect || null
  }

  return null
}

const getRegionAndSlugByVariation = variation => {
  const [region, slug] = variation.split('.')

  return {
    region,
    slug: slug.toLowerCase(),
  }
}

const mergeVariations = variations => {
  return variations
    .map(getRegionAndSlugByVariation)
    .reduce(
      (variations, variation) =>
        merge(variations, find(variation.region, variation.slug)),
      {}
    )
}

const get = (region, slugParam) => {
  const dialect = find(region, slugParam)

  if (!dialect) {
    return null
  }

  if (dialect.variations) {
    const variationsData = mergeVariations(dialect.variations)
    delete dialect.variations

    Object.entries(variationsData).forEach(([key, value]) => {
      if (!dialect[key]) {
        dialect[key] = value
      }
    })
  }

  return dialect
}

const search = word => {
  return Object.entries(dialects).reduce((acc, [key, values]) => {
    const value = values.find(value => {
      return value.dialect.toLowerCase().includes(word.toLowerCase())
    })
    if (value) {
      acc[key] = [value]
    }
    return acc
  }, {})
}

module.exports = {
  get,
  find,
  getRegionAndSlugByVariation,
  mergeVariations,
  search,
}
