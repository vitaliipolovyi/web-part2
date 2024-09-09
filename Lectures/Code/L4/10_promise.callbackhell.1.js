const failureCallback = function (error) {
  console.error(error);
};

callable1(function (result) {
  callable2(
    result,
    function (result2) {
      callable3(
        result2,
        function (result3) {
          console.log(result3);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);

// ------------------------------ //

promisify()
  .then(promisify2)
  .then(promisify3)
  .then(function (result3) {
    console.log(result3);
  })
  .catch(failureCallback);
