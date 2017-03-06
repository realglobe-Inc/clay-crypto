/**
 * Verify text with signature
 * @function verify
 * @param {string} plaintext - Text to verify
 * @param {RSAKey} publicKey - Public key
 * @param {string} signature - Signature string
 * @returns {boolean} Valid or not
 */
'use strict'

const { publicKeyFromString, b64to16 } = require('cryptico')

/** @lends verify */
function verify (plaintext, publicKey, signature) {
  if (typeof plaintext === 'object') {
    plaintext = JSON.stringify(plaintext)
  }
  if (typeof publicKey === 'string') {
    publicKey = publicKeyFromString(publicKey)
  }
  console.log(plaintext, signature)
  // return publicKey.verifyString(plaintext, b64to16(signature))
  return publicKey.verifyString(plaintext, signature)
}

module.exports = verify
