/**
 * Generate RSA key
 * @function generate
 * @param {string} [passphrase=''] - Pass phrase of the key
 * @param {number} [bits=1024] - Bits for the key
 * @returns {Array} - Key pair
 *
 * @see https://github.com/wwwtyro/cryptico
 */
'use strict'

const { generateRSAKey, publicKeyString } = require('cryptico')

/** @lends generate */
function generate (passphrase = '', bits = 1024) {
  let privateKey = generateRSAKey(passphrase, bits)
  let publicKey = publicKeyString(privateKey)
  return { privateKey, publicKey }
}

module.exports = generate
