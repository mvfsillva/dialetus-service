const path = require("path")
const glob = require("glob")

const PATH_PATTERN = path.join(__dirname, '/*.svg')

const getFlagKey = filePath => filePath.split('/').pop().replace('.svg', '')

const transform = (filePath) => {
  return {
    key: getFlagKey(filePath),
    url: filePath
  }
}

const loadFlags = () =>
  glob
    .sync(PATH_PATTERN)
    .map(transform)

module.exports = {
  loadFlags
}

