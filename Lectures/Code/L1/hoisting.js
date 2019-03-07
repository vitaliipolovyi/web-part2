console.log(x) // undefined
var x = 3;

/**
 * Self-invoking functions / Immediately Invoked Function Expressions
 */
(function () {
  console.log(newVar) // undefined
  var newVar = 'local value'
})()
