let t = null;

const promise1 = new Promise(function (resolve, reject) {
  t = setTimeout(
    function (res) {
      console.log('promise 1 is resolved');
      resolve(res);
    },
    1000,
    'foo'
  );
  console.log('t', t);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('Smth went wrong'));
  }, 500);
});

const promise3 = Promise.resolve(999);

Promise.all([promise1, promise2, promise3])
  .then(function (values) {
    console.dir(values);
  })
  .catch(function (error) {
    if (t) {
      clearTimeout(t);
      t = null;
    }
    console.error('Error ' + error.message);
  });
