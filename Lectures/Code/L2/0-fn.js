// Curry

// const sum = x => {
//   return y => {
//     return x + y
//   }
// }

// console.log(sum(2))
// console.log(sum(2)(1))

// const log = function (field, val) {
//   console.log(`field: ${field}; value: ${val}`)
// }

// const handleChange = fieldName => event => {
//   log(fieldName, event.target.value)
// }

// document.addEventListener('change', handleChange('name'))
// document.addEventListener('change', handleChange('birthdate'))

// handleChange('name')({ target: { value: 'JD' } })

// function getVolume (length) {
//   return function (width) {
//     return function (height) {
//       return height * width * length
//     }
//   }
// }

// function uncarryVolume (l, h, w) {
//   return getVolume(l)(h)(w)
// }

// console.log(getVolume(3))
// console.log(getVolume(3)(2))
// console.log(getVolume(3)(2)(1))
// console.log(uncarryVolume(3, 2, 1))

// Partial apply

// const calcConcat = (arr1, arr2) => arr1.concat(arr2)
// const srcArr = [1, 5, 10, 4, 5]
// const preFilter = arr => calcConcat(
//   srcArr,
//   arr.filter(item => item > 0)
// )
// const resArr = preFilter([-1, -5, 10, 11])

// console.log(resArr)
