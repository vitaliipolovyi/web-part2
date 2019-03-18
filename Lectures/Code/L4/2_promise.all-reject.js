const promise1 = new Promise(function (resolve, reject) {
  console.log('promise 1 is resolved')
  setTimeout(resolve, 100, 'foo')
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('Smth went wrong'))
  }, 500)
})

const promise3 = Promise.resolve(999)

Promise.all([promise1, promise2, promise3])
  .then(function (values) {
    console.dir(values)
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
  })
