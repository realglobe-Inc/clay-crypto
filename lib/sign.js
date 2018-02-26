/**
 * Create sign
 * @function sign
 * @param {string} privateKey - Private key of signer
 * @param {string} text - String to be encrypted.
 * @returns {string}
 */
'use strict'

const {createSign} = require('crypto')
const {CryptFormat, LogPrefixes} = require('clay-constants')
const {CRYPTO_PREFIX} = LogPrefixes
const {DIGEST_ALGORITHM, SIGN_FORMAT} = CryptFormat
const stringify = require('./stringify')

/** @lends sign */
function sign (privateKey, text, options = {}) {
  if (!privateKey) {
    throw new Error(`${CRYPTO_PREFIX} privateKey is required`)
  }
  const {
    algorithm = DIGEST_ALGORITHM
  } = options
  const sign = createSign(algorithm)
  sign.update(stringify(text))
  return sign.sign(privateKey, SIGN_FORMAT)
}

module.exports = sign
