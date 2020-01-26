const { loadFlags } = require('../../../../database/flags')

describe('Database: Flags', () => {
  describe('loadFlags()', () => {
    it('Expect to return a array that contain a key, url object', () => {
      const flags = loadFlags()

      expect(flags).to.be.an('array')

      const firstItem = flags.shift()

      expect(firstItem.key).to.eql('alagoanes')
      expect(firstItem.url.includes('/flags/alagoanes.svg')).to.eql(true);
    })
  })
})

