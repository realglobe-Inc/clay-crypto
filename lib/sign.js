/**
 * Create sign
 * @function sign
 * @param {string} text - String to be encrypted.
 * @param {RSAKey} signingKey - RSAKey object of the sender.
 * @returns {string}
 */
'use strict'

const { b16to64 } = require('cryptico')
const { CryptFormat } = require('clay-constants')
const { DIGEST_ALGORITHM } = CryptFormat

/** @lends sign */
function sign (plaintext, signingKey, options = {}) {
  let { algorithm = DIGEST_ALGORITHM } = options
  return b16to64(signingKey.signString(plaintext, algorithm))
}

module.exports = sign
