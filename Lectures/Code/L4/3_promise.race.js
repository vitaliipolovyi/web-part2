const promise1 = new Promise(function (resolve, reject) {
  console.log('promise 1 is resolved')
  setTimeout(resolve, 600, 'foo') // !! 3d param
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('promise 2 is resolved')
    resolve(['array', 'param'])
  }, 500)
})

// const promise3 = Promise.resolve(999)

Promise.race([promise1, promise2])
  .then(function (value) {
    console.log('------')
    console.log('Race value is:', value)
    console.log('------')
  })
