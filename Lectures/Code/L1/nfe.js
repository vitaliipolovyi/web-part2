// Named function expressions

const fibonacciExpr = function fibonacci (n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacciNum = fibonacciExpr(6)

console.log(typeof fibonacciExpr, fibonacciNum)
