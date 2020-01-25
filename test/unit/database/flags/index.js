const { loadFlags } = require('../../../../database/flags')

describe('Database: Flags', () => {
  describe('loadFlags()', () => {
    it('Expect to return a array that contain a key, url object', () => {
      const flags = loadFlags()

      expect(flags).to.be.an('array')

      const expectTheAlagoanesImagePath = {
          key: 'alagoanes',
          url: '/flags/alagoanes.svg'
      }

      expect(flags[0]).to.eql(expectTheAlagoanesImagePath)
    })
  })
})

