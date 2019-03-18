const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Fail promise'))
  }, 500)
})

promise1.catch(error => {
  console.log(error)
})
