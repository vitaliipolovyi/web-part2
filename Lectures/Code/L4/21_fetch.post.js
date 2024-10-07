function json(response) {
  return response.json();
}

const searchParams = new URLSearchParams({
  arg1: 'va1',
  arg2: 'val2',
});

const url = 'https://api.example.con';
fetch(url, {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: searchParams.toString(),
})
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
