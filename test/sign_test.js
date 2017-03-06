/**
 * Test case for sign.
 * Runs with mocha.
 */
'use strict'

const sign = require('../lib/sign.js')
const assert = require('assert')
const generate = require('../lib/generate.js')
const co = require('co')

describe('sign', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sign', () => co(function * () {
    const { privateKey } = generate(1024)
    let signature01 = sign(privateKey, 'This is the text')
    let signature02 = sign(privateKey, 'This is the text')
    assert.equal(signature01, signature02)
  }))

  it('Sign an object', () => co(function * () {
    const { privateKey } = generate(256)
    let signature01 = sign(privateKey, { foo: 'This is foo' })
    let signature02 = sign(privateKey, { foo: 'This is foo' })
    assert.equal(signature01, signature02)
  }))
})

/* global describe, before, after, it */
