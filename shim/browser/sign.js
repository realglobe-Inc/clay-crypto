/**
 * Create sign
 * @function sign
 * @param {string} text - String to be encrypted.
 * @param {RSAKey} signingKey - RSAKey object of the sender.
 * @returns {string}
 */
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parse = require('./parse');

var _require = require('cryptico');

var b16to64 = _require.b16to64;

var _require2 = require('clay-constants');

var CryptFormat = _require2.CryptFormat;
var LogPrefixes = _require2.LogPrefixes;
var CRYPTO_PREFIX = LogPrefixes.CRYPTO_PREFIX;
var DIGEST_ALGORITHM = CryptFormat.DIGEST_ALGORITHM;

/** @lends sign */

function sign(plaintext, signingKey) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (!signingKey) {
    throw new Error(CRYPTO_PREFIX + ' signingKey is required');
  }
  var _options$algorithm = options.algorithm;
  var algorithm = _options$algorithm === undefined ? DIGEST_ALGORITHM : _options$algorithm;

  if ((typeof plaintext === 'undefined' ? 'undefined' : (0, _typeof3.default)(plaintext)) === 'object') {
    plaintext = (0, _stringify2.default)(plaintext);
  }
  return b16to64(parse(signingKey).signString(plaintext, algorithm));
}

module.exports = sign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24uanMiXSwibmFtZXMiOlsicGFyc2UiLCJyZXF1aXJlIiwiYjE2dG82NCIsIkNyeXB0Rm9ybWF0IiwiTG9nUHJlZml4ZXMiLCJDUllQVE9fUFJFRklYIiwiRElHRVNUX0FMR09SSVRITSIsInNpZ24iLCJwbGFpbnRleHQiLCJzaWduaW5nS2V5Iiwib3B0aW9ucyIsIkVycm9yIiwiYWxnb3JpdGhtIiwic2lnblN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkOztlQUNvQkEsUUFBUSxVQUFSLEM7O0lBQVpDLE8sWUFBQUEsTzs7Z0JBQzZCRCxRQUFRLGdCQUFSLEM7O0lBQTdCRSxXLGFBQUFBLFc7SUFBYUMsVyxhQUFBQSxXO0lBQ2JDLGEsR0FBa0JELFcsQ0FBbEJDLGE7SUFDQUMsZ0IsR0FBcUJILFcsQ0FBckJHLGdCOztBQUVSOztBQUNBLFNBQVNDLElBQVQsQ0FBZUMsU0FBZixFQUEwQkMsVUFBMUIsRUFBb0Q7QUFBQSxNQUFkQyxPQUFjLHlEQUFKLEVBQUk7O0FBQ2xELE1BQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmLFVBQU0sSUFBSUUsS0FBSixDQUFhTixhQUFiLDZCQUFOO0FBQ0Q7QUFIaUQsMkJBSVhLLE9BSlcsQ0FJNUNFLFNBSjRDO0FBQUEsTUFJNUNBLFNBSjRDLHNDQUloQ04sZ0JBSmdDOztBQUtsRCxNQUFJLFFBQU9FLFNBQVAsdURBQU9BLFNBQVAsT0FBcUIsUUFBekIsRUFBbUM7QUFDakNBLGdCQUFZLHlCQUFlQSxTQUFmLENBQVo7QUFDRDtBQUNELFNBQU9OLFFBQVFGLE1BQU1TLFVBQU4sRUFBa0JJLFVBQWxCLENBQTZCTCxTQUE3QixFQUF3Q0ksU0FBeEMsQ0FBUixDQUFQO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUJSLElBQWpCIiwiZmlsZSI6InNpZ24uanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgc2lnblxuICogQGZ1bmN0aW9uIHNpZ25cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gU3RyaW5nIHRvIGJlIGVuY3J5cHRlZC5cbiAqIEBwYXJhbSB7UlNBS2V5fSBzaWduaW5nS2V5IC0gUlNBS2V5IG9iamVjdCBvZiB0aGUgc2VuZGVyLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IGIxNnRvNjQgfSA9IHJlcXVpcmUoJ2NyeXB0aWNvJylcbmNvbnN0IHsgQ3J5cHRGb3JtYXQsIExvZ1ByZWZpeGVzIH0gPSByZXF1aXJlKCdjbGF5LWNvbnN0YW50cycpXG5jb25zdCB7IENSWVBUT19QUkVGSVggfSA9IExvZ1ByZWZpeGVzXG5jb25zdCB7IERJR0VTVF9BTEdPUklUSE0gfSA9IENyeXB0Rm9ybWF0XG5cbi8qKiBAbGVuZHMgc2lnbiAqL1xuZnVuY3Rpb24gc2lnbiAocGxhaW50ZXh0LCBzaWduaW5nS2V5LCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCFzaWduaW5nS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0NSWVBUT19QUkVGSVh9IHNpZ25pbmdLZXkgaXMgcmVxdWlyZWRgKVxuICB9XG4gIGxldCB7IGFsZ29yaXRobSA9IERJR0VTVF9BTEdPUklUSE0gfSA9IG9wdGlvbnNcbiAgaWYgKHR5cGVvZiBwbGFpbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgcGxhaW50ZXh0ID0gSlNPTi5zdHJpbmdpZnkocGxhaW50ZXh0KVxuICB9XG4gIHJldHVybiBiMTZ0bzY0KHBhcnNlKHNpZ25pbmdLZXkpLnNpZ25TdHJpbmcocGxhaW50ZXh0LCBhbGdvcml0aG0pKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpZ25cbiJdfQ==