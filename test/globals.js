const chai = require('chai')
const nock = require('nock')
const chaiHttp = require('chai-http')
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(chaiHttp)
chai.use(sinonChai)
chai.use(chaiAsPromised)

require('dotenv').load()

global.assert = chai.assert
global.sinon = sinon
global.expect = chai.expect

// This means Node can only make outbound calls to localhost - chai-http calls only!
console.log('Restrict Nock for local requests...')
nock.enableNetConnect('127.0.0.1')

// Fail tests when a promise rejects, but isn't caught
// See also: http://2ality.com/2016/04/unhandled-rejections.html
process.on('unhandledRejection', rejection => {
  throw rejection
})

// It's possible to store a promise, then at some time in the future, attach a
// `.catch()` which handles any errors. While this is _possible_, it's not a
// good pattern (too easy to forget to attach a `.catch()`), so node throws a
// warning on the next tick if a promise hasn't been given a `.catch()`.
// This log gives a much more meaningful stack trace for hunting down the issues
// in node >= 7.9
// See also: http://stackoverflow.com/a/40921505/473961
process.on('warning', warning => {
  if (warning.name === 'PromiseRejectionHandledWarning') {
    console.log(warning.stack)
  }
})
