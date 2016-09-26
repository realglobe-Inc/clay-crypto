/**
 * Decrypt text
 * @function decrypt
 * @param {string} text - Cipher text
 * @param {RSAKey} rsaKey - Rsa key
 * @returns {Object} - Decrypted text
 */
'use strict'

const { decrypt: doDecrypt } = require('cryptico')

/** @lends decrypt */
function decrypt (text, rsaKey) {
  let { status, plaintext } = doDecrypt(text, rsaKey)
  if (status !== 'success') {
    throw new Error('[clay-crypt] decrypt failed')
  }
  return plaintext
}

module.exports = decrypt
