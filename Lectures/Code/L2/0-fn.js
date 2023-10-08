// Curry

// function fn() {
//     console.log(this)
// }

// const a = {
//   fn: function a() {
//     console.log(this)
//   }
// }

// console.log(fn(), a.fn())

// const sum = (x) => {
//   return (y) => {
//     return x + y
//   }
// }

// const sumFn = sum(2)
// console.log(sumFn)
// console.log(sumFn(1))
// console.log(sumFn(3))
// console.log(sumFn(4))

const log = function (field, val) {
  console.log(`field: ${field}; value: ${val}`)
}

const handleChange = fieldName => event => {
  log(fieldName, event.target.value)
}

// document.addEventListener('change', handleChange('name'))
// document.addEventListener('change', handleChange('birthdate'))

const event = { target: { value: 'JD' } }
handleChange('name')(event)
handleChange('name2')(event)

function getVolume (length) {
  return function (width) {
    return function (height) {
      return height * width * length
    }
  }
}

function uncarryVolume (l, h, w) {
  return getVolume(l)(h)(w)
}

// console.log(getVolume(3))
// console.log(getVolume(3)(2))
// console.log(getVolume(3)(2)(1))
// console.log(uncarryVolume(3, 2, 1))

// Partial apply

const calcConcat = (arr1, arr2) => arr1.concat(arr2)
const srcArr = [1, 5, 10, 4, 5]
const preFilter = (arr, cb) => calcConcat(
  srcArr,
  arr.filter(cb)
)
const resArr = preFilter([-1, -5, 10, 11], item => item < 0)

console.log(resArr)
