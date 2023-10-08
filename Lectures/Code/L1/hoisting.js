
a()

function a() {
  console.log('hoisting')
}

/**
 * Self-invoking functions / Immediately Invoked Function Expressions
 */
(function (arg1) {
  console.log(arg1) // undefined
  var newVar = 'local value'
})('test')
