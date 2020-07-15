/**
 * 防抖
 * @param {function} fn
 * @param {number} minDelay
 * @param {object} scope
 * @return {function}
 */
const debounce = (fn, minDelay = 300, scope = null) => {
  let timeout
  return function () {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(fn.bind(scope || this, ...arguments), minDelay)
  }
}

/**
 * 节流
 * @param {function} fn
 * @param {number} minDelay
 * @param {object} scope
 * @return {function}
 */
const throttle = (fn, minDelay = 300, scope = null) => {
  let lastCall = 0
  let timeout
  return function () {
    const now = Date.now()
    if (now - lastCall < minDelay) {
      timeout && clearTimeout(timeout)
      return timeout = setTimeout(fn.bind(scope || this, ...arguments), minDelay)
    }
    lastCall = now
    timeout && clearTimeout(timeout)
    fn.apply(scope || this, arguments)
  }
}

export default {
  debounce,
  throttle
}
