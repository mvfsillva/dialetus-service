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
  const objectify = arry => Object.assign(...arry.map(([k, v]) => ({ [k]: v })))
  const cache = []
  Object.entries(dialects).forEach(([key, values]) => {
    values.forEach(value => {
      if (value.dialect.toLowerCase().includes(word.toLowerCase())) {
        cache.push([key, value])
      }
    })
  })
  return objectify(cache)
}

module.exports = {
  get,
  find,
  getRegionAndSlugByVariation,
  mergeVariations,
  search,
}
