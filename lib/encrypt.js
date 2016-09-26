/**
 * Encrypt text
 * @function encrypt
 * @param {string} text - Text to encrypt
 * @param {RSAKey} rsaKey - RSA Key object
 * @returns {Object} - Encrypted text
 */
'use strict'

const { encrypt: doEncrypt } = require('cryptico')

/** @lends encrypt */
function encrypt (text, rsaKey) {
  let { status, cipher } = doEncrypt(text, rsaKey)
  if (status !== 'success') {
    throw new Error('[clay-crypto] Encrypt failed')
  }
  return cipher
}

module.exports = encrypt
