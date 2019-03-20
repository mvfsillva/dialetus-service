const searchController = require('../../../../../lib/controllers/search')

const sandbox = sinon.createSandbox()

const res = {
  send: sandbox.stub(),
  status: sandbox.stub(),
}

describe('Controllers: Search#search', () => {
  afterEach(() => sandbox.reset())

  after(() => sandbox.restore())

  it('should return an error message if receives an invalid word', async () => {
    const req = { query: { q: '999' } }
    const send = sandbox.stub()

    res.status.returns({ send })
    await searchController(req, res)

    expect(res.status).to.have.been.calledWith(404)
    expect(send).to.have.been.calledWith({ error: 'Not found!' })
  })
})
