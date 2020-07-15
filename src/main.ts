/**
 * 防抖
 */
const debounce = (fn: any, minDelay: number = 300, scope: object = null): any => {
  let timeout
  return function () {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(fn.bind(scope || this, ...arguments), minDelay)
  }
}

/**
 * 节流
 */
const throttle = (fn: any, minDelay: number = 300, scope: object = null): any => {
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
