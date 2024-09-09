/**
 * Self-invoking functions / Immediately Invoked Function Expressions
 */
(function () {
  console.log('Self-invoking function');
})();

(function (param) {
  console.log(`Self-invoking function: ${param}`);
})('PARAM');

const Module = (function Module() {
  let current = 0;

  return {
    increment() {
      current++;
      return this;
    },
    getCurrent() {
      return current;
    },
  };
})();

const moduleInstance = Module;
moduleInstance.increment().increment();
console.log(moduleInstance.getCurrent());

const moduleInstance2 = Module;
moduleInstance2.increment().getCurrent();
console.log(moduleInstance2.getCurrent());
