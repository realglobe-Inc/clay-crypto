/**
 * Create sign
 * @function sign
 * @param {string} privateKey - Private key of signer
 * @param {string} text - String to be encrypted.
 * @returns {string}
 */
'use strict'

const crypto = require('crypto')
const { CryptFormat, LogPrefixes } = require('clay-constants')
const { CRYPTO_PREFIX } = LogPrefixes
const { DIGEST_ALGORITHM } = CryptFormat
const stringify = require('./stringify')

/** @lends sign */
function sign (privateKey, text, options = {}) {
  if (!privateKey) {
    throw new Error(`${CRYPTO_PREFIX} privateKey is required`)
  }
  let {
    algorithm = 'RSA-SHA256'
  } = options
  const sign = crypto.createSign(algorithm)
  sign.update(stringify(text))
  console.log('stringify(text)', privateKey, stringify(text))
  return sign.sign(privateKey, 'hex')
}

module.exports = sign
