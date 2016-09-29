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
var publicKeyID = _require.publicKeyID;

var _require2 = require('clay-constants');

var CryptFormat = _require2.CryptFormat;
var GENERATE_BITS = CryptFormat.GENERATE_BITS;

/** @lends generate */

function generate() {
  var passphrase = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var bits = arguments.length <= 1 || arguments[1] === undefined ? GENERATE_BITS : arguments[1];

  var privateKey = generateRSAKey(passphrase, bits);
  var publicKey = publicKeyString(privateKey);
  var id = publicKeyID(publicKey);
  return { id: id, privateKey: (0, _stringify2.default)(privateKey), publicKey: publicKey };
}

module.exports = generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZW5lcmF0ZVJTQUtleSIsInB1YmxpY0tleVN0cmluZyIsInB1YmxpY0tleUlEIiwiQ3J5cHRGb3JtYXQiLCJHRU5FUkFURV9CSVRTIiwiZ2VuZXJhdGUiLCJwYXNzcGhyYXNlIiwiYml0cyIsInByaXZhdGVLZXkiLCJwdWJsaWNLZXkiLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7ZUFFeURBLFFBQVEsVUFBUixDOztJQUFqREMsYyxZQUFBQSxjO0lBQWdCQyxlLFlBQUFBLGU7SUFBaUJDLFcsWUFBQUEsVzs7Z0JBQ2pCSCxRQUFRLGdCQUFSLEM7O0lBQWhCSSxXLGFBQUFBLFc7SUFDQUMsYSxHQUFrQkQsVyxDQUFsQkMsYTs7QUFFUjs7QUFDQSxTQUFTQyxRQUFULEdBQTBEO0FBQUEsTUFBdkNDLFVBQXVDLHlEQUExQixFQUEwQjtBQUFBLE1BQXRCQyxJQUFzQix5REFBZkgsYUFBZTs7QUFDeEQsTUFBSUksYUFBYVIsZUFBZU0sVUFBZixFQUEyQkMsSUFBM0IsQ0FBakI7QUFDQSxNQUFJRSxZQUFZUixnQkFBZ0JPLFVBQWhCLENBQWhCO0FBQ0EsTUFBSUUsS0FBS1IsWUFBWU8sU0FBWixDQUFUO0FBQ0EsU0FBTyxFQUFFQyxNQUFGLEVBQU1GLFlBQVkseUJBQWVBLFVBQWYsQ0FBbEIsRUFBOENDLG9CQUE5QyxFQUFQO0FBQ0Q7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUJQLFFBQWpCIiwiZmlsZSI6ImdlbmVyYXRlLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGUgUlNBIGtleVxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Bhc3NwaHJhc2U9JyddIC0gUGFzcyBwaHJhc2Ugb2YgdGhlIGtleVxuICogQHBhcmFtIHtudW1iZXJ9IFtiaXRzPTEwMjRdIC0gQml0cyBmb3IgdGhlIGtleVxuICogQHJldHVybnMge0FycmF5fSAtIEtleSBwYWlyXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd3d3dHlyby9jcnlwdGljb1xuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgeyBnZW5lcmF0ZVJTQUtleSwgcHVibGljS2V5U3RyaW5nLCBwdWJsaWNLZXlJRCB9ID0gcmVxdWlyZSgnY3J5cHRpY28nKVxuY29uc3QgeyBDcnlwdEZvcm1hdCB9ID0gcmVxdWlyZSgnY2xheS1jb25zdGFudHMnKVxuY29uc3QgeyBHRU5FUkFURV9CSVRTIH0gPSBDcnlwdEZvcm1hdFxuXG4vKiogQGxlbmRzIGdlbmVyYXRlICovXG5mdW5jdGlvbiBnZW5lcmF0ZSAocGFzc3BocmFzZSA9ICcnLCBiaXRzID0gR0VORVJBVEVfQklUUykge1xuICBsZXQgcHJpdmF0ZUtleSA9IGdlbmVyYXRlUlNBS2V5KHBhc3NwaHJhc2UsIGJpdHMpXG4gIGxldCBwdWJsaWNLZXkgPSBwdWJsaWNLZXlTdHJpbmcocHJpdmF0ZUtleSlcbiAgbGV0IGlkID0gcHVibGljS2V5SUQocHVibGljS2V5KVxuICByZXR1cm4geyBpZCwgcHJpdmF0ZUtleTogSlNPTi5zdHJpbmdpZnkocHJpdmF0ZUtleSksIHB1YmxpY0tleSB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVcbiJdfQ==