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
var DIGEST_ALGORITHM = CryptFormat.DIGEST_ALGORITHM;

/** @lends sign */

function sign(plaintext, signingKey) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var _options$algorithm = options.algorithm;
  var algorithm = _options$algorithm === undefined ? DIGEST_ALGORITHM : _options$algorithm;

  if ((typeof plaintext === 'undefined' ? 'undefined' : (0, _typeof3.default)(plaintext)) === 'object') {
    plaintext = (0, _stringify2.default)(plaintext);
  }
  return b16to64(parse(signingKey).signString(plaintext, algorithm));
}

module.exports = sign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24uanMiXSwibmFtZXMiOlsicGFyc2UiLCJyZXF1aXJlIiwiYjE2dG82NCIsIkNyeXB0Rm9ybWF0IiwiRElHRVNUX0FMR09SSVRITSIsInNpZ24iLCJwbGFpbnRleHQiLCJzaWduaW5nS2V5Iiwib3B0aW9ucyIsImFsZ29yaXRobSIsInNpZ25TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDs7ZUFDb0JBLFFBQVEsVUFBUixDOztJQUFaQyxPLFlBQUFBLE87O2dCQUNnQkQsUUFBUSxnQkFBUixDOztJQUFoQkUsVyxhQUFBQSxXO0lBQ0FDLGdCLEdBQXFCRCxXLENBQXJCQyxnQjs7QUFFUjs7QUFDQSxTQUFTQyxJQUFULENBQWVDLFNBQWYsRUFBMEJDLFVBQTFCLEVBQW9EO0FBQUEsTUFBZEMsT0FBYyx5REFBSixFQUFJO0FBQUEsMkJBQ1hBLE9BRFcsQ0FDNUNDLFNBRDRDO0FBQUEsTUFDNUNBLFNBRDRDLHNDQUNoQ0wsZ0JBRGdDOztBQUVsRCxNQUFJLFFBQU9FLFNBQVAsdURBQU9BLFNBQVAsT0FBcUIsUUFBekIsRUFBbUM7QUFDakNBLGdCQUFZLHlCQUFlQSxTQUFmLENBQVo7QUFDRDtBQUNELFNBQU9KLFFBQVFGLE1BQU1PLFVBQU4sRUFBa0JHLFVBQWxCLENBQTZCSixTQUE3QixFQUF3Q0csU0FBeEMsQ0FBUixDQUFQO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUJQLElBQWpCIiwiZmlsZSI6InNpZ24uanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgc2lnblxuICogQGZ1bmN0aW9uIHNpZ25cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gU3RyaW5nIHRvIGJlIGVuY3J5cHRlZC5cbiAqIEBwYXJhbSB7UlNBS2V5fSBzaWduaW5nS2V5IC0gUlNBS2V5IG9iamVjdCBvZiB0aGUgc2VuZGVyLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IGIxNnRvNjQgfSA9IHJlcXVpcmUoJ2NyeXB0aWNvJylcbmNvbnN0IHsgQ3J5cHRGb3JtYXQgfSA9IHJlcXVpcmUoJ2NsYXktY29uc3RhbnRzJylcbmNvbnN0IHsgRElHRVNUX0FMR09SSVRITSB9ID0gQ3J5cHRGb3JtYXRcblxuLyoqIEBsZW5kcyBzaWduICovXG5mdW5jdGlvbiBzaWduIChwbGFpbnRleHQsIHNpZ25pbmdLZXksIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgeyBhbGdvcml0aG0gPSBESUdFU1RfQUxHT1JJVEhNIH0gPSBvcHRpb25zXG4gIGlmICh0eXBlb2YgcGxhaW50ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgIHBsYWludGV4dCA9IEpTT04uc3RyaW5naWZ5KHBsYWludGV4dClcbiAgfVxuICByZXR1cm4gYjE2dG82NChwYXJzZShzaWduaW5nS2V5KS5zaWduU3RyaW5nKHBsYWludGV4dCwgYWxnb3JpdGhtKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaWduXG4iXX0=