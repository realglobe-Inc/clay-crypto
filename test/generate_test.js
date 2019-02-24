/**
 * Test case for generate.
 * Runs with mocha.
 */
'use strict'

const generate = require('../lib/generate.js')
const assert = require('assert')

describe('generate', function () {
  this.timeout(3000)

  it('Generate', () => {
    let { privateKey, publicKey } = generate()
    assert.ok(publicKey)
    assert.ok(privateKey)
  })
})

/* global describe, before, after, it */
