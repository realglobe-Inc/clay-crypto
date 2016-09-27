/**
 * Parse RSAKey
 * @function parse
 * @param {string|RSAKey} - Key to parse
 * @returns {RSAKey} - Prased key
 */
'use strict';

var _require = require('cryptico');

var RSAKey = _require.RSAKey;

/** @lends parse */

function parse(rsaKey) {
  if (typeof rsaKey === 'string') {
    rsaKey = RSAKey.parse(rsaKey);
  }
  return rsaKey;
}

module.exports = parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSU0FLZXkiLCJwYXJzZSIsInJzYUtleSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7ZUFFbUJBLFFBQVEsVUFBUixDOztJQUFYQyxNLFlBQUFBLE07O0FBRVI7O0FBQ0EsU0FBU0MsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEIsTUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCQSxhQUFTRixPQUFPQyxLQUFQLENBQWFDLE1BQWIsQ0FBVDtBQUNEO0FBQ0QsU0FBT0EsTUFBUDtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCSCxLQUFqQiIsImZpbGUiOiJwYXJzZS5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBhcnNlIFJTQUtleVxuICogQGZ1bmN0aW9uIHBhcnNlXG4gKiBAcGFyYW0ge3N0cmluZ3xSU0FLZXl9IC0gS2V5IHRvIHBhcnNlXG4gKiBAcmV0dXJucyB7UlNBS2V5fSAtIFByYXNlZCBrZXlcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgUlNBS2V5IH0gPSByZXF1aXJlKCdjcnlwdGljbycpXG5cbi8qKiBAbGVuZHMgcGFyc2UgKi9cbmZ1bmN0aW9uIHBhcnNlIChyc2FLZXkpIHtcbiAgaWYgKHR5cGVvZiByc2FLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgcnNhS2V5ID0gUlNBS2V5LnBhcnNlKHJzYUtleSlcbiAgfVxuICByZXR1cm4gcnNhS2V5XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcbiJdfQ==