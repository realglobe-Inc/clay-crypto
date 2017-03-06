/**
 * Generate RSA key
 * @function generate
 * @param {number} [bits=1024] - Bits for the key
 * @returns {Array} - Key pair
 *
 * @see https://github.com/wwwtyro/cryptico
 */
'use strict'

const ursa = require('ursa')
const uuid = require('uuid')
const { CryptFormat } = require('clay-constants')
const { GENERATE_BITS } = CryptFormat

/** @lends generate */
function generate (bits = GENERATE_BITS) {
  let keypair = ursa.generatePrivateKey(bits)
  return {
    id: uuid.v4,
    privateKey: String(keypair.toPrivatePem()),
    publicKey: String(keypair.toPublicPem())
  }
}

module.exports = generate

