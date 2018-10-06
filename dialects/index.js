'use strict'

const path = require('path')
const glob = require('glob')

const loadFile = extension => filePath => [
  path.basename(filePath, extension),
  require(filePath),
]
const zip = (object, [key, value]) => ({ ...object, [key]: value })

const PATTERN_DIALECTS = path.join(__dirname, '/*.json')

const loadDialects = () =>
  glob
    .sync(PATTERN_DIALECTS)
    .map(loadFile('.json'))
    .reduce(zip, {})

module.exports = Object.freeze({
  ...loadDialects(),
})
