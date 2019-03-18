fetch('http://ip-api.com/json')
  .then(function (response) {
    console.log(response)
    return response.json()
  })
  .then(function (ipData) {
    console.log(ipData)
  })
