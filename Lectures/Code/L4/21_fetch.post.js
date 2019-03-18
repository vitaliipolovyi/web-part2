function json (response) {
  return response.json()
}

const url = 'https://api.example.con'
fetch(url, {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  body: 'arg1=val1&arg2=val2'
})
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(function (error) {
    console.log('Request failed', error);
  })
