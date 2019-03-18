const promise1 = new Promise(function (resolve, reject) {
  console.log('promise 1 is resolved')
  setTimeout(resolve, 100, 'foo')
})

const promise2 = new Promise(function (resolve, reject) {
  const fn = pormise => {
    resolve(promise1)
  }
  setTimeout(fn, 100)
})

promise2
  .then(function (value) {
    console.log('------')
    console.log(value)
    console.log('------')
  })
