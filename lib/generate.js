/**
 * Generate RSA key
 * @function generate
 * @param {number} [bits=1024] - Bits for the key
 * @returns {Array} - Key pair
 *
 * @see https://github.com/wwwtyro/cryptico
 */
'use strict'

const keypair = require('keypair')
const uuid = require('uuid')
const { CryptFormat } = require('clay-constants')
const { GENERATE_BITS } = CryptFormat

/** @lends generate */
function generate (bits = GENERATE_BITS) {
  let {
    public: publicKey,
    private: privateKey
  } = keypair({ bits })
  return {
    id: uuid.v4,
    privateKey,
    publicKey
  }
}

module.exports = generate

