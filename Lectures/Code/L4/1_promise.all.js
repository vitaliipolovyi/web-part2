const promise1 = new Promise(function (resolve, reject) {  
  const func = res => {
    console.log('promise 1 is resolved')
    resolve(res)
  }
  setTimeout(func, 600, 'foo') // !! 3d param
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('promise 2 is resolved')
    resolve(['array', 'param'])
  }, 500)
})

const promise3 = Promise.resolve(999)

Promise.all([promise1, promise2, promise3])
  .then(function (values) {
    console.dir(values)
  })
