/**
 * Stringify object
 * @function stringify
 * @param {*} value - Value to stringify
 * @returns {string} String value
 */
'use strict'

const {flatten} = require('objnest')

/** @lends stringify */
function stringify (value) {
  if (typeof value === 'object') {
    let flattened = flatten(value)
    let normalized = Object.keys(flattened).sort().reduce((normalized, name) => Object.assign(normalized, {
      [name]: flattened[ name ]
    }), {})
    return JSON.stringify(normalized)
  }
  return String(value)
}

module.exports = stringify
