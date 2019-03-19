/**
 * This function removes accents and special characters from the word.
 * ex: ç, é, ão.
 * @param  {String} word
 * @return {String}
 */
const toNormalize = word => {
  const regex = /[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g
  return word.normalize('NFD').replace(regex, '')
}

module.exports = {
  toNormalize,
}
