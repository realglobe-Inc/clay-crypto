/**
 * Verify text with signature
 * @function verify
 * @param {RSAKey} publicKey - Public key
 * @param {string} text - Text to verify
 * @param {string} signature - Signature string
 * @returns {boolean} Valid or not
 */
'use strict'

const { createVerify } = require('crypto')
const { CryptFormat, LogPrefixes } = require('clay-constants')
const stringify = require('./stringify')
const { CRYPTO_PREFIX } = LogPrefixes
const { DIGEST_ALGORITHM, SIGN_FORMAT } = CryptFormat

/** @lends verify */
function verify (publicKey, text, signature, options = {}) {
  if (!publicKey) {
    throw new Error(`${CRYPTO_PREFIX} publicKey is required`)
  }
  let {
    algorithm = DIGEST_ALGORITHM
  } = options
  let verify = createVerify(algorithm)
  verify.update(Buffer.from(stringify(text)))
  return verify.verify(publicKey, signature, SIGN_FORMAT)
}

module.exports = verify
