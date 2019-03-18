Promise.resolve(['data'])
  .then(function (value) {
    console.log(value)
  }, function (value) {
    // not called
  })
