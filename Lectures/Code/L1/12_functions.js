// 'use strict';

function foo() {
  console.log(arguments);
  Object.entries(arguments).forEach((a) => console.log(a));
}

foo('a', 'b');
foo('a', 'b', 'c');

console.log('\n---------------------------\n');

function concat(delim, ...theArgs) {
  console.log(theArgs);
  return theArgs.join(delim);
}

console.log(concat(' | ', 'aaa', 'bbb', 'ccc'));
console.log(concat(' | ', ...['aaa', 'bbb', 'ccc']));
console.log(concat(' | ', ['aaa', 'bbb', 'ccc']));

console.log('\n---------------------------\n');

function powAll(pow, ...theArgs) {
  return theArgs.map((num) => Math.pow(num, pow));
}

console.log(powAll(110, 3, 4, 89));

console.log('\n---------------------------\n');

function add(a, b) {
  function privateScope(val) {
    return val * 10;
  }

  return privateScope(a) + privateScope(b);
}

console.log(add(4, 5));

console.log('\n---------------------------\n');

const InitCar = function () {
  let brand = '';

  return {
    setBrand: function (newBrand) {
      brand = newBrand;

      return this;
    },
    getBrand: function (newBrand) {
      return brand;
    },
  };
};

const myCar = InitCar();
const brand = myCar.setBrand('Chrysler').getBrand();
console.log(brand);

console.log('\n---------------------------\n');

const arrowFn = () => console.log(this);

// function ArrowTest(param) {
//   this.param = param;

//   const foo = () => this.param;

//   foo();
// }
console.log(this);
const ArrowTest = {
  param: '',
  callback1: function (newParam) {
    this.param = newParam;
    console.log(this);
  },
  callback2: (newParam) => {
    this.param = newParam;
    console.log(this);
  },
};

ArrowTest.callback1('test');
ArrowTest.callback2('test2');

console.log('\n---------------------------\n');

function Tick() {
  this.ticks = 0;

  this.Run = function () {
    setInterval(() => {
      this.ticks++;
      console.log(`tick ${this.ticks}`);
    }, 1000);
  };
}

const ticker = new Tick();
ticker.Run();
