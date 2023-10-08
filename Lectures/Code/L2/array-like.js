const array = [30, 2, 3, 4]
const array2 = array.slice()

console.log(array.findIndex(a => a < 5))
console.log(array)


function fn(a, b, c) {
    console.log(arguments)
}

fn(1, 2, 3)

function argumentsArrayLike () {
  Array.prototype.forEach.call(arguments, function (item, index) {
    console.log(item, index)
  })
}

argumentsArrayLike(1, 2, 3)

function stringArrayLike () {
  Array.prototype.forEach.call('a string', function (chr, index) {
    console.log([index, chr])
  })
}

stringArrayLike()

let s = 'aaa'
for (let i = 0; i < s.length; i++) {
    s[i]
}
