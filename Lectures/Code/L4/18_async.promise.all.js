const promise1 = new Promise(function (resolve, reject) {
  setTimeout(
    function resolveTm(res) {
      console.log('promise 1 is resolved');
      resolve(res);
    },
    500,
    'foo'
  ); // !! 3d param
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('promise 2 is resolved');
    resolve(['array', 'param']);
  }, 100);
});

const promise3 = Promise.resolve(999);

function doAll() {
  return Promise.all([promise1, promise2, promise3]);
}

async function awaitAll() {
  const res = await doAll();
  return res;
}

awaitAll().then((res) => {
  console.log(res);
});
