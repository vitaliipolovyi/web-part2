async function fetchIpInfo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //'http://ip-api.com/json/test');
  if (response.ok) {
    const ipInfo = await response.json();
    console.log(ipInfo);
  } else {
    console.error(`${response.status} ${response.statusText}`);
  }
}

fetchIpInfo();

// fetch('http://ip-api.com/json')
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (ipData) {
//     console.log(ipData);
//   });
