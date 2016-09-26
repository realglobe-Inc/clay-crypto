/**
 * Generate RSA key
 * @function generate
 * @param {string} [passphrase=''] - Pass phrase of the key
 * @param {number} [bits=1024] - Bits for the key
 * @returns {Array} - Key pair
 *
 * @see https://github.com/wwwtyro/cryptico
 */
'use strict';

var _require = require('cryptico');

var generateRSAKey = _require.generateRSAKey;
var publicKeyString = _require.publicKeyString;

/** @lends generate */

function generate() {
  var passphrase = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var bits = arguments.length <= 1 || arguments[1] === undefined ? 1024 : arguments[1];

  var privateKey = generateRSAKey(passphrase, bits);
  var publicKey = publicKeyString(privateKey);
  return { privateKey: privateKey, publicKey: publicKey };
}

module.exports = generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZW5lcmF0ZVJTQUtleSIsInB1YmxpY0tleVN0cmluZyIsImdlbmVyYXRlIiwicGFzc3BocmFzZSIsImJpdHMiLCJwcml2YXRlS2V5IiwicHVibGljS2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVNBOztlQUU0Q0EsUUFBUSxVQUFSLEM7O0lBQXBDQyxjLFlBQUFBLGM7SUFBZ0JDLGUsWUFBQUEsZTs7QUFFeEI7O0FBQ0EsU0FBU0MsUUFBVCxHQUFpRDtBQUFBLE1BQTlCQyxVQUE4Qix5REFBakIsRUFBaUI7QUFBQSxNQUFiQyxJQUFhLHlEQUFOLElBQU07O0FBQy9DLE1BQUlDLGFBQWFMLGVBQWVHLFVBQWYsRUFBMkJDLElBQTNCLENBQWpCO0FBQ0EsTUFBSUUsWUFBWUwsZ0JBQWdCSSxVQUFoQixDQUFoQjtBQUNBLFNBQU8sRUFBRUEsc0JBQUYsRUFBY0Msb0JBQWQsRUFBUDtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCTixRQUFqQiIsImZpbGUiOiJnZW5lcmF0ZS5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdlbmVyYXRlIFJTQSBrZXlcbiAqIEBmdW5jdGlvbiBnZW5lcmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXNzcGhyYXNlPScnXSAtIFBhc3MgcGhyYXNlIG9mIHRoZSBrZXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbYml0cz0xMDI0XSAtIEJpdHMgZm9yIHRoZSBrZXlcbiAqIEByZXR1cm5zIHtBcnJheX0gLSBLZXkgcGFpclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3d3d3R5cm8vY3J5cHRpY29cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZ2VuZXJhdGVSU0FLZXksIHB1YmxpY0tleVN0cmluZyB9ID0gcmVxdWlyZSgnY3J5cHRpY28nKVxuXG4vKiogQGxlbmRzIGdlbmVyYXRlICovXG5mdW5jdGlvbiBnZW5lcmF0ZSAocGFzc3BocmFzZSA9ICcnLCBiaXRzID0gMTAyNCkge1xuICBsZXQgcHJpdmF0ZUtleSA9IGdlbmVyYXRlUlNBS2V5KHBhc3NwaHJhc2UsIGJpdHMpXG4gIGxldCBwdWJsaWNLZXkgPSBwdWJsaWNLZXlTdHJpbmcocHJpdmF0ZUtleSlcbiAgcmV0dXJuIHsgcHJpdmF0ZUtleSwgcHVibGljS2V5IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVxuIl19