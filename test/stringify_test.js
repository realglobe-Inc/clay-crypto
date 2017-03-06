/**
 * Test case for stringify.
 * Runs with mocha.
 */
'use strict'

const stringify = require('../lib/stringify.js')
const { equal } = require('assert')
const co = require('co')

describe('stringify', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Stringify', () => co(function * () {
    equal(
      stringify({ foo: 'bar' }),
      stringify({ foo: 'bar' })
    )

    equal(
      stringify({ foo: 'bar', baz: 'quz' }),
      stringify({ baz: 'quz', foo: 'bar' })
    )
  }))
})

/* global describe, before, after, it */
