const promise = new Promise(function (resolve, reject) {
  // ????
  const request = new XMLHttpRequest();
  request.open('GET', 'http://ip-api2s.com/json'); // https://jsonplaceholder.typicode.com/todos/1 http://ip-api.comm/json
  request.responseType = 'json';
  request.onload = function () {
    resolve(request.response);
  };
  request.onerror = function () {
    reject(new Error('An error occurred'));
  };

  request.send();
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error.message);
  });
