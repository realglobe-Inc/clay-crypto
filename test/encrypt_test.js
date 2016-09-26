/**
 * Test case for encrypt.
 * Runs with mocha.
 */
'use strict'

const encrypt = require('../lib/encrypt.js')
const generate = require('../lib/generate.js')
const assert = require('assert')
const co = require('co')

describe('encrypt', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Encrypt', () => co(function * () {
    const { publicKey, privateKey } = generate('', 1024)
    let encrypted01 = encrypt('This is the message', publicKey, privateKey)
    assert.ok(encrypted01)
  }))
})

/* global describe, before, after, it */
