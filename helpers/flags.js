const flagsDatabase = require('../database/flags')

const flags = flagsDatabase.loadFlags()

const list = () => flags

const get = (key) => flags.find(f => f.key === key)


module.exports = {
  list,
  get
}