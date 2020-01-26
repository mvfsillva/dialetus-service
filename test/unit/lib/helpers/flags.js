const flagsHelper = require('../../../../helpers/flags')

describe('Helpers: Flags', () => {
  describe('list()', () => {
    it('Expect to return an array', () => {
      const flags = flagsHelper.list()

      expect(flags).to.be.an('array')
      expect(flags.length > 0).to.eql(true)
    })
  })
  describe('get(key)', () => {
    it('Expect to return an object', () => {
      const flag = flagsHelper.get('baianes')

      expect(flag).to.be.an('object')
    })
  })
})
