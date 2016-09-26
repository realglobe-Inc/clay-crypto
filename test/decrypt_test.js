/**
 * Test case for decrypt.
 * Runs with mocha.
 */
'use strict'

const decrypt = require('../lib/decrypt.js')
const encrypt = require('../lib/encrypt.js')
const generate = require('../lib/generate.js')
const assert = require('assert')
const co = require('co')

describe('decrypt', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Decrypt', () => co(function * () {
    const { publicKey, privateKey } = generate('', 1024)
    let encrypted01 = encrypt('This is the message', publicKey, privateKey)
    assert.ok(encrypted01)
    let decrypted01 = decrypt(encrypted01, privateKey)
    assert.equal(decrypted01, 'This is the message')
  }))
})

/* global describe, before, after, it */
