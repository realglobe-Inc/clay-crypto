/**
 * Generate RSA key
 * @function generate
 * @param {number} [bits=1024] - Bits for the key
 * @returns {Array} - Key pair
 *
 * @see https://github.com/wwwtyro/cryptico
 */
'use strict'

const crypto = require('crypto')
const uuid = require('uuid')
const { CryptFormat } = require('clay-constants')
const { GENERATE_BITS } = CryptFormat

/** @lends generate */
function generate (bits = GENERATE_BITS) {
  let diffieHellman = crypto.createDiffieHellman(bits)
  diffieHellman.generateKeys('base64')
  return {
    id: uuid.v4,
    privateKey: diffieHellman.getPrivateKey('hex'),
    publicKey: diffieHellman.getPublicKey('hex')
  }
}

module.exports = generate

