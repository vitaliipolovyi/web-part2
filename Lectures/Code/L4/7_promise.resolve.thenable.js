const promise1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill('fulfilled!')
  }
})

promise1
  .then(function (value) {
    console.log(value)
  })

const promise2 = Promise.resolve({
  then: function (resolve) {
    throw new Error('Fail')
    resolve('Bar')
  }
})

promise2
  .then(
    () => {},
    function (error) {
      console.error(error.message)
    }
  )
