
a()

function a() {
  console.log('hoisting')
}

/**
 * Self-invoking functions / Immediately Invoked Function Expressions
 */
(function () {
  console.log(newVar) // undefined
  var newVar = 'local value'
})()
