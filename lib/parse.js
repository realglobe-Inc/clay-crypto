/**
 * Parse RSAKey
 * @function parse
 * @param {string|RSAKey} - Key to parse
 * @returns {RSAKey} - Prased key
 */
'use strict'

const { RSAKey } = require('cryptico')

/** @lends parse */
function parse (rsaKey) {
  if (typeof rsaKey === 'string') {
    rsaKey = RSAKey.parse(rsaKey)
  }
  return rsaKey
}

module.exports = parse
