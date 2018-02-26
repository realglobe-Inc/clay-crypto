/**
 * Cryptographic utility for Clay DB
 * @module clay-crypto
 */

'use strict'

const d = (module) => module && module.default || module

const generate = d(require('./generate'))
const sign = d(require('./sign'))
const stringify = d(require('./stringify'))
const verify = d(require('./verify'))

module.exports = {
  generate,
  sign,
  stringify,
  verify
}
