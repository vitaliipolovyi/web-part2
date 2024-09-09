const promise1 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('promise 1 is resolved');
      resolve('foo');
    }, 100);
  });

const promise2 = (foo) =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('promise 2 is resolved');
      resolve(['array', 'param']);
    }, 500);
  });

const promise3 = (arr) => {
  throw new Error('Error');
  Promise.resolve(999);
};

promise1()
  .then(promise2)
  .then(promise3)
  .catch(console.error)
  .then(function () {
    console.log('------');
    console.log('do it');
    console.log('------');
  });
