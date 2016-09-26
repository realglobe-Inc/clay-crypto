/**
 * Encrypt text
 * @function encrypt
 * @param {string} text - String to be encrypted.
 * @param {string} publicKey - Public key string of the recipient.
 * @param {RSAKey} signingKey - RSAKey object of the sender.
 * @returns {Object} - Encrypted text
 */
'use strict'

const { encrypt: doEncrypt } = require('cryptico')
const { LogPrefixes } = require('clay-constants')
const { CRYPTO_PREFIX } = LogPrefixes

/** @lends encrypt */
function encrypt (text, publicKey, signingKey) {
  let { status, cipher } = doEncrypt(text, publicKey, signingKey)
  if (status !== 'success') {
    throw new Error(`${CRYPTO_PREFIX} Encrypt failed`)
  }
  return cipher
}

module.exports = encrypt
