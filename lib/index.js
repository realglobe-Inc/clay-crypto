/**
 * Cryptographic utility for Clay DB
 * @module clay-crypto
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get generate () { return d(require('./generate')) }
}
