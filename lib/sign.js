/**
 * Create sign
 * @function sign
 * @param {string} text - String to be encrypted.
 * @param {RSAKey} signingKey - RSAKey object of the sender.
 * @returns {string}
 */
'use strict'

const parse = require('./parse')
const { b16to64 } = require('cryptico')
const { CryptFormat, LogPrefixes } = require('clay-constants')
const { CRYPTO_PREFIX } = LogPrefixes
const { DIGEST_ALGORITHM } = CryptFormat

/** @lends sign */
function sign (plaintext, signingKey, options = {}) {
  if (!signingKey) {
    throw new Error(`${CRYPTO_PREFIX} signingKey is required`)
  }
  let { algorithm = DIGEST_ALGORITHM } = options
  if (typeof plaintext === 'object') {
    plaintext = JSON.stringify(plaintext)
  }
  return b16to64(parse(signingKey).signString(plaintext, algorithm))
}

module.exports = sign
