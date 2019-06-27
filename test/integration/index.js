const chai = require('chai')

const app = require('../../server')
const { version } = require('../../package.json')

describe('Integration: Default endpoint', () => {
  let server
  const expectedResponse = {
    version,
    up: true,
  }

  before(() => {
    server = app.listen()
  })

  after(() => server.close())

  it('GET `/` should return all available endpoints', async () => {
    const res = await chai
      .request(server)
      .get('/')
      .redirects(0)

    expect(res).to.have.status(200)
    expect(res.body).to.eql(expectedResponse)
  })
})
