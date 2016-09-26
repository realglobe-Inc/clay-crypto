/**
 * Decrypt text
 * @function decrypt
 * @param {string} text - Cipher string to be decrypted.
 * @param {RSAKey} rsaKey - - RSAKey object of the recipient.
 * @returns {Object} - Decrypted text
 */
'use strict'

const { decrypt: doDecrypt } = require('cryptico')
const { LogPrefixes } = require('clay-constants')
const { CRYPTO_PREFIX } = LogPrefixes

/** @lends decrypt */
function decrypt (text, rsaKey) {
  let { status, plaintext } = doDecrypt(text, rsaKey)
  if (status !== 'success') {
    throw new Error(`${CRYPTO_PREFIX} Decrypt failed`)
  }
  return plaintext
}

module.exports = decrypt
