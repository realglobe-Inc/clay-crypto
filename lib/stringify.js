/**
 * Stringify object
 * @function stringify
 * @param {*} value - Value to stringify
 * @returns {string} String value
 */
'use strict'

/** @lends stringify */
function stringify (value) {
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return String(value)
}

module.exports = stringify
