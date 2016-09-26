/**
 * Cryptographic utility for Clay DB
 * @module clay-crypto
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get decrypt () { return d(require('./decrypt')) },
  get encrypt () { return d(require('./encrypt')) },
  get generate () { return d(require('./generate')) },
  get sign () { return d(require('./sign')) }
}
