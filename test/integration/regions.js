const chai = require('chai')
const app = require('../../app')

describe('Integration: Dialect Regions endpoint', () => {
  let server
  const expectedResponse = [
    {
      name: 'alagoanes',
      total: 64,
    },
    {
      name: 'amazones',
      total: 9,
    },
    {
      name: 'baianes',
      total: 42,
    },
    {
      name: 'carioques',
      total: 14,
    },
    {
      name: 'catarines',
      total: 22,
    },
    {
      name: 'cearences',
      total: 10,
    },
    {
      name: 'gauches',
      total: 25,
    },
    {
      name: 'lageanes',
      total: 28,
    },
    {
      name: 'maranhes',
      total: 15,
    },
    {
      name: 'mineires',
      total: 26,
    },
    {
      name: 'paraense',
      total: 30,
    },
    {
      name: 'paranes',
      total: 53,
    },
    {
      name: 'paulistes',
      total: 16,
    },
    {
      name: 'pernambuques',
      total: 17,
    },
    {
      name: 'piauies',
      total: 30,
    },
    {
      name: 'potiguares',
      total: 35,
    },
    {
      name: 'rondones',
      total: 9,
    },
    {
      name: 'sergipanes',
      total: 11,
    },
  ]

  before(() => {
    server = app.listen()
  })

  after(() => server.close())

  it('GET `/regions` should return all available dialects', async () => {
    const res = await chai
      .request(server)
      .get('/regions')
      .redirects(0)

    expect(res).to.have.status(200)
    expect(res.body).to.eql(expectedResponse)
  })
})
