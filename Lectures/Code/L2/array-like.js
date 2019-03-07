function argumentsArrayLike () {
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item)
  })
}

argumentsArrayLike(1, 2, 3)

function stringArrayLike () {
  Array.prototype.forEach.call('a string', function (chr, index) {
    console.log([index, chr])
  })
}

stringArrayLike()
