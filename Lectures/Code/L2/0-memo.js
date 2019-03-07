const Memo = (function () {
  const cache = {}

  function cacheOrCalc (fn) {
    return function () {
      const key = JSON.stringify(arguments)
      if (cache[key]) {
        console.log('hit ' + key)

        return cache[key]
      } else {
        const val = fn.apply(this, arguments)
        cache[key] = val

        console.log('run ' + key)

        return val
      }
    }
  }

  return {
    memoize (fn) {
      return cacheOrCalc(fn)
    }
  }
})()

const fibo = Memo.memoize(function (n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return fibo(n - 1) + fibo(n - 2)
})

console.log(fibo(5))
console.log('-----')
console.log(fibo(8))
