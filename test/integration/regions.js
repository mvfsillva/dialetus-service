const chai = require('chai')
const app = require('../../app')

describe('Integration: Default endpoint', () => {
  let server
  const expectedResponse = [
    {
      name: 'baianes',
      total: 27,
    },
    {
      name: 'carioques',
      total: 13,
    },
    {
      name: 'catarines',
      total: 8,
    },
    {
      name: 'cearences',
      total: 10,
    },
    {
      name: 'mineires',
      total: 21,
    },
    {
      name: 'paranes',
      total: 53,
    },
    {
      name: 'pernambuques',
      total: 12,
    },
    {
      name: 'potiguares',
      total: 30,
    },
    {
      name: 'rondones',
      total: 9,
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
