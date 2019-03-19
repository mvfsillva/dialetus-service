const dialectHelper = require('../../../../lib/helpers/dialect')

describe('Helpers: Dialect', () => {
  describe('find(region, slug)', () => {
    it('Expect to return an object when slug and region exists', () => {
      const dialect = dialectHelper.find('paulistes', 'se-pa')

      expect(dialect).to.be.an('object')
    })

    it('Expect to return null when slug does not exists', () => {
      const dialect = dialectHelper.find('paulistes', 'se-pah')

      expect(dialect).to.be.a('null')
    })

    it('Expect to return null when region does not exists', () => {
      const dialect = dialectHelper.find(
        'tupi-guarani-do-centro-norte',
        'se-pah'
      )

      expect(dialect).to.be.a('null')
    })
  })

  describe('getRegionAndSlugByVariation(variation)', () => {
    it('It should return an object with slug and region keys', () => {
      const data = dialectHelper.getRegionAndSlugByVariation('hello.world')

      expect(data).to.eql({ region: 'hello', slug: 'world' })
    })
  })

  describe('mergeVariations([variation])', () => {
    it('it should return a merged version of the variations', () => {
      const data = dialectHelper.mergeVariations([
        'baianes.oxente',
        'paulistes.se-pa',
      ])
      const expectedData = {
        slug: 'se-pa',
        dialect: 'Se pá',
        meanings: ['Surpresa', 'Admiração', 'Talvez', 'Se der'],
        examples: ['Oxente mainha!', 'Se pá eu apareço aí hoje à noite'],
      }

      expect(data).to.eql(expectedData)
    })
  })

  describe('get(region, slug)', () => {
    it('Expect to return an unmodifed object when slug and region exists but has no variation', () => {
      const dialect = dialectHelper.get('paulistes', 'se-pa')

      expect(dialect).to.be.an('object')
    })

    it('Expect to return a modifed object when slug and region exists and has variation', () => {
      const dialect = dialectHelper.get('potiguares', 'oxe')

      expect(dialect.variations).to.be.a('undefined')
      expect(dialect).to.be.an('object')
    })

    it('Expect to return null when slug does not exists', () => {
      const dialect = dialectHelper.get('paulistes', 'se-pah')

      expect(dialect).to.be.a('null')
    })

    it('Expect to return null when region does not exists', () => {
      const dialect = dialectHelper.get(
        'tupi-guarani-do-centro-norte',
        'se-pah'
      )

      expect(dialect).to.be.a('null')
    })
  })

  describe('search(word)', () => {
    it('Expect to return a array with two object when the word exists in two regions', () => {
      const dialect = dialectHelper.search('Baita')

      expect(dialect).to.be.an('object')

      const expectGauches = [
        {
          slug: 'baita',
          dialect: 'Baita',
          meanings: ['Grande', 'Imenso'],
          examples: ['Bah tchê, que baita de um problema tu arranjaste?!'],
        },
      ]

      expect(dialect.gauches).to.eql(expectGauches)

      const expectParanes = [
        {
          slug: 'baita',
          dialect: 'Baita',
          meanings: ['grande', 'enorme', 'de grandes proporções'],
          examples: ['Mas que baita susto tu me deu'],
        },
      ]

      expect(dialect.paranes).to.eql(expectParanes)
    })
  })
})
