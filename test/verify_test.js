/**
 * Test case for verify.
 * Runs with mocha.
 */
'use strict'

const generate = require('../lib/generate.js')
const sign = require('../lib/sign.js')
const verify = require('../lib/verify.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('verify', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Verify', () => co(function * () {
    const { privateKey, publicKey } = generate(1024)
    let signature = sign(privateKey, 'This is the text')
    ok(verify(publicKey, 'This is the text', signature))
    ok(!verify(publicKey, 'This is not the text', signature))
    equal(typeof signature, 'string')
  }))
})

/* global describe, before, after, it */
