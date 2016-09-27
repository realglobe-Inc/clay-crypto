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
const { CryptFormat } = require('clay-constants')
const { GENERATE_BITS } = CryptFormat

/** @lends generate */
function generate (passphrase = '', bits = 512) {
  let privateKey = generateRSAKey(passphrase, bits)
  let publicKey = publicKeyString(privateKey)
  return { privateKey: JSON.stringify(privateKey), publicKey }
}

module.exports = generate
