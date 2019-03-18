const promise1 = new Promise(function (resolve, reject) {
  console.log('promise 1 is resolved')
  setTimeout(resolve, 500, 'foo')
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('Smth went wrong'))
  }, 100)
})

Promise.race([promise1, promise2])
  .then(function (value) {
    console.log(value)
  })
  .catch(function (error) {
    console.log('------')
    console.error('Error ' + error.message)
    console.log('------')
  })
