/**
 * Decrypt text
 * @function decrypt
 * @param {string} text - Cipher string to be decrypted.
 * @param {RSAKey} rsaKey - - RSAKey object of the recipient.
 * @returns {Object} - Decrypted text
 */
'use strict';

var parse = require('./parse');

var _require = require('cryptico');

var doDecrypt = _require.decrypt;

var _require2 = require('clay-constants');

var LogPrefixes = _require2.LogPrefixes;
var CRYPTO_PREFIX = LogPrefixes.CRYPTO_PREFIX;

/** @lends decrypt */

function decrypt(text, rsaKey) {
  var _doDecrypt = doDecrypt(text, parse(rsaKey));

  var status = _doDecrypt.status;
  var plaintext = _doDecrypt.plaintext;

  if (status !== 'success') {
    throw new Error(CRYPTO_PREFIX + ' Decrypt failed');
  }
  return plaintext;
}

module.exports = decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY3J5cHQuanMiXSwibmFtZXMiOlsicGFyc2UiLCJyZXF1aXJlIiwiZG9EZWNyeXB0IiwiZGVjcnlwdCIsIkxvZ1ByZWZpeGVzIiwiQ1JZUFRPX1BSRUZJWCIsInRleHQiLCJyc2FLZXkiLCJzdGF0dXMiLCJwbGFpbnRleHQiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBT0E7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7O2VBQytCQSxRQUFRLFVBQVIsQzs7SUFBZEMsUyxZQUFUQyxPOztnQkFDZ0JGLFFBQVEsZ0JBQVIsQzs7SUFBaEJHLFcsYUFBQUEsVztJQUNBQyxhLEdBQWtCRCxXLENBQWxCQyxhOztBQUVSOztBQUNBLFNBQVNGLE9BQVQsQ0FBa0JHLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBLG1CQUNGTCxVQUFVSSxJQUFWLEVBQWdCTixNQUFNTyxNQUFOLENBQWhCLENBREU7O0FBQUEsTUFDeEJDLE1BRHdCLGNBQ3hCQSxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQixjQUNoQkEsU0FEZ0I7O0FBRTlCLE1BQUlELFdBQVcsU0FBZixFQUEwQjtBQUN4QixVQUFNLElBQUlFLEtBQUosQ0FBYUwsYUFBYixxQkFBTjtBQUNEO0FBQ0QsU0FBT0ksU0FBUDtBQUNEOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQiIsImZpbGUiOiJkZWNyeXB0LmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGVjcnlwdCB0ZXh0XG4gKiBAZnVuY3Rpb24gZGVjcnlwdFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDaXBoZXIgc3RyaW5nIHRvIGJlIGRlY3J5cHRlZC5cbiAqIEBwYXJhbSB7UlNBS2V5fSByc2FLZXkgLSAtIFJTQUtleSBvYmplY3Qgb2YgdGhlIHJlY2lwaWVudC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gRGVjcnlwdGVkIHRleHRcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCB7IGRlY3J5cHQ6IGRvRGVjcnlwdCB9ID0gcmVxdWlyZSgnY3J5cHRpY28nKVxuY29uc3QgeyBMb2dQcmVmaXhlcyB9ID0gcmVxdWlyZSgnY2xheS1jb25zdGFudHMnKVxuY29uc3QgeyBDUllQVE9fUFJFRklYIH0gPSBMb2dQcmVmaXhlc1xuXG4vKiogQGxlbmRzIGRlY3J5cHQgKi9cbmZ1bmN0aW9uIGRlY3J5cHQgKHRleHQsIHJzYUtleSkge1xuICBsZXQgeyBzdGF0dXMsIHBsYWludGV4dCB9ID0gZG9EZWNyeXB0KHRleHQsIHBhcnNlKHJzYUtleSkpXG4gIGlmIChzdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtDUllQVE9fUFJFRklYfSBEZWNyeXB0IGZhaWxlZGApXG4gIH1cbiAgcmV0dXJuIHBsYWludGV4dFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY3J5cHRcbiJdfQ==