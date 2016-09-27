/**
 * Test case for generate.
 * Runs with mocha.
 */
'use strict'

const generate = require('../lib/generate.js')
const assert = require('assert')
const co = require('co')

describe('generate', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Generate', () => co(function * () {
    let { privateKey, publicKey } = generate()
    assert.ok(publicKey)
    assert.ok(privateKey)
  }))
})

/* global describe, before, after, it */
