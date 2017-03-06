/**
 * Cryptographic utility for Clay DB
 * @module clay-crypto
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get generate () { return d(require('./generate')) },
  get sign () { return d(require('./sign')) },
  get stringify () { return d(require('./stringify')) },
  get verify () { return d(require('./verify')) }
}
