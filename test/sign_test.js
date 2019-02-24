/**
 * Test case for sign.
 * Runs with mocha.
 */
'use strict'

const sign = require('../lib/sign.js')
const { equal } = require('assert')
const generate = require('../lib/generate.js')


describe('sign', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Sign', async () => {
    const { privateKey } = generate(1024)
    let signature01 = sign(privateKey, 'This is the text')
    let signature02 = sign(privateKey, 'This is the text')
    equal(String(signature01), String(signature02))
  })

  it('Sign an object', async () => {
    const { privateKey } = generate(512)
    let signature01 = sign(privateKey, { foo: 'This is foo' })
    let signature02 = sign(privateKey, { foo: 'This is foo' })
    equal(String(signature01), String(signature02))
  })
})

/* global describe, before, after, it */
