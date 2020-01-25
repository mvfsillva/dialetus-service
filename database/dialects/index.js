const path = require('path')
const glob = require('glob')
const slugify = require('slugify')

const loadFile = extension => filePath => [
  path.basename(filePath, extension),
  require(filePath),
]
const zip = (object, [key, value]) => ({ ...object, [key]: value })

const addSlugToDialect = dialect => ({
  slug: slugify(dialect.dialect, { lower: true, remove: /[*+~.?()'"!:@]/g }),
  ...dialect,
})

const slugifyAllRegions = ([region, dialects]) => [
  region,
  dialects.map(addSlugToDialect),
]

const PATTERN_DIALECTS = path.join(__dirname, '/*.json')

const loadDialects = () =>
  glob
    .sync(PATTERN_DIALECTS)
    .map(loadFile('.json'))
    .map(slugifyAllRegions)
    .reduce(zip, {})

module.exports = Object.freeze({
  ...loadDialects(),
})
