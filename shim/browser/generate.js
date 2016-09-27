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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('cryptico');

var generateRSAKey = _require.generateRSAKey;
var publicKeyString = _require.publicKeyString;

var _require2 = require('clay-constants');

var CryptFormat = _require2.CryptFormat;
var GENERATE_BITS = CryptFormat.GENERATE_BITS;

/** @lends generate */

function generate() {
  var passphrase = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var bits = arguments.length <= 1 || arguments[1] === undefined ? GENERATE_BITS : arguments[1];

  var privateKey = generateRSAKey(passphrase, bits);
  var publicKey = publicKeyString(privateKey);
  return { privateKey: (0, _stringify2.default)(privateKey), publicKey: publicKey };
}

module.exports = generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZW5lcmF0ZVJTQUtleSIsInB1YmxpY0tleVN0cmluZyIsIkNyeXB0Rm9ybWF0IiwiR0VORVJBVEVfQklUUyIsImdlbmVyYXRlIiwicGFzc3BocmFzZSIsImJpdHMiLCJwcml2YXRlS2V5IiwicHVibGljS2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVNBOzs7Ozs7OztlQUU0Q0EsUUFBUSxVQUFSLEM7O0lBQXBDQyxjLFlBQUFBLGM7SUFBZ0JDLGUsWUFBQUEsZTs7Z0JBQ0FGLFFBQVEsZ0JBQVIsQzs7SUFBaEJHLFcsYUFBQUEsVztJQUNBQyxhLEdBQWtCRCxXLENBQWxCQyxhOztBQUVSOztBQUNBLFNBQVNDLFFBQVQsR0FBMEQ7QUFBQSxNQUF2Q0MsVUFBdUMseURBQTFCLEVBQTBCO0FBQUEsTUFBdEJDLElBQXNCLHlEQUFmSCxhQUFlOztBQUN4RCxNQUFJSSxhQUFhUCxlQUFlSyxVQUFmLEVBQTJCQyxJQUEzQixDQUFqQjtBQUNBLE1BQUlFLFlBQVlQLGdCQUFnQk0sVUFBaEIsQ0FBaEI7QUFDQSxTQUFPLEVBQUVBLFlBQVkseUJBQWVBLFVBQWYsQ0FBZCxFQUEwQ0Msb0JBQTFDLEVBQVA7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQk4sUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZSBSU0Ega2V5XG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFzc3BocmFzZT0nJ10gLSBQYXNzIHBocmFzZSBvZiB0aGUga2V5XG4gKiBAcGFyYW0ge251bWJlcn0gW2JpdHM9MTAyNF0gLSBCaXRzIGZvciB0aGUga2V5XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gS2V5IHBhaXJcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93d3d0eXJvL2NyeXB0aWNvXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGdlbmVyYXRlUlNBS2V5LCBwdWJsaWNLZXlTdHJpbmcgfSA9IHJlcXVpcmUoJ2NyeXB0aWNvJylcbmNvbnN0IHsgQ3J5cHRGb3JtYXQgfSA9IHJlcXVpcmUoJ2NsYXktY29uc3RhbnRzJylcbmNvbnN0IHsgR0VORVJBVEVfQklUUyB9ID0gQ3J5cHRGb3JtYXRcblxuLyoqIEBsZW5kcyBnZW5lcmF0ZSAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUgKHBhc3NwaHJhc2UgPSAnJywgYml0cyA9IEdFTkVSQVRFX0JJVFMpIHtcbiAgbGV0IHByaXZhdGVLZXkgPSBnZW5lcmF0ZVJTQUtleShwYXNzcGhyYXNlLCBiaXRzKVxuICBsZXQgcHVibGljS2V5ID0gcHVibGljS2V5U3RyaW5nKHByaXZhdGVLZXkpXG4gIHJldHVybiB7IHByaXZhdGVLZXk6IEpTT04uc3RyaW5naWZ5KHByaXZhdGVLZXkpLCBwdWJsaWNLZXkgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlXG4iXX0=