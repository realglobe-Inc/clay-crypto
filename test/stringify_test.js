/**
 * Test case for stringify.
 * Runs with mocha.
 */
'use strict'

const stringify = require('../lib/stringify.js')
const { equal } = require('assert')


describe('stringify', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Stringify', async () => {
    equal(
      stringify({ foo: 'bar' }),
      stringify({ foo: 'bar' })
    )

    equal(
      stringify({ foo: 'bar', baz: 'quz' }),
      stringify({ baz: 'quz', foo: 'bar' })
    )
  })
})

/* global describe, before, after, it */
