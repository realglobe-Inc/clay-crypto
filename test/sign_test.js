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
    const { privateKey } = generate('', 1024)
    let signed01 = sign('This is the text', privateKey, {})
    let signed02 = sign('This is the text', privateKey, {})
    assert.equal(signed01, signed02)
  }))

  it('Sign an object', () => co(function * () {
    const { privateKey } = generate('', 1024)
    let signed01 = sign({ foo: 'This is foo' }, privateKey, {})
    let signed02 = sign({ foo: 'This is foo' }, privateKey, {})
    assert.equal(signed01, signed02)
  }))
})

/* global describe, before, after, it */
