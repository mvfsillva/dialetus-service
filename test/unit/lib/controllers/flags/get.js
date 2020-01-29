const flagsController = require('../../../../../controllers/flags')

const sandbox = sinon.createSandbox()

const res = {
  send: sandbox.stub(),
  status: sandbox.stub(),
}

describe('Controllers: Flags#get', () => {
  afterEach(() => sandbox.reset())

  after(() => sandbox.restore())

  it('should return an error message if receives an invalid key', async () => {
    const req = { params: { key: 'orlando' } }

    const send = sandbox.stub()

    res.status.returns({ send })
    await flagsController.get(req, res)

    expect(res.status).to.have.been.calledWith(404)
    expect(send).to.have.been.calledWith({ error: 'Not found!' })
  })
})
