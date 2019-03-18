const promise = new Promise(function (resolve, reject) {
  const request = new XMLHttpRequest()
  request.open('GET', 'http://ip-api.com/json') // http://ip-api.comm/json
  request.responseType = 'json'
  request.onload = function () {
    resolve(request.response)
  }
  request.onerror = function () {
    reject(new Error('An error occured'))
  }

  request.send()
})

promise
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error.message)
  })
