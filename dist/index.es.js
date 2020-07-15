/**
 * 防抖
 * @param {number} n
 * @return {string}
 */
var debounce = function debounce(fn) {
  var minDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var timeout;
  return function () {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(fn.bind.apply(fn, [scope || this].concat(Array.prototype.slice.call(arguments))), minDelay);
  };
};

var throttle = function throttle(fn) {
  var minDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var lastCall = 0;
  var timeout;
  return function () {
    var now = Date.now();

    if (now - lastCall < minDelay) {
      timeout && clearTimeout(timeout);
      return timeout = setTimeout(fn.bind.apply(fn, [scope || this].concat(Array.prototype.slice.call(arguments))), minDelay);
    }

    lastCall = now;
    timeout && clearTimeout(timeout);
    fn.apply(scope || this, arguments);
  };
};

var main = {
  debounce: debounce,
  throttle: throttle
};

export default main;
