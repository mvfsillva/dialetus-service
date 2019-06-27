const findDialect = require('../../../../../controllers/dialects/find')

const sandbox = sinon.createSandbox()

const res = {
  send: sandbox.stub(),
  status: sandbox.stub(),
}

describe('Controllers: Dialect#find', () => {
  afterEach(() => sandbox.reset())

  after(() => sandbox.restore())

  it('should return an error message if receives an invalid region', async () => {
    const req = { params: { region: 'does-not-exist' } }
    const send = sandbox.stub()

    res.status.returns({ send })
    await findDialect(req, res)

    expect(res.status).to.have.been.calledWith(404)
    expect(send).to.have.been.calledWith({ error: 'Not found!' })
  })
})
