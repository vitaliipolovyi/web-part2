// const sums = [129.31, 214.55, 246.53]
// const average = sums.reduce((total, amount, index, array) => {
//   total += amount
//   return (index === array.length - 1) ? total / array.length : total
// })

// console.log(average)

const fruitBasket = [
  'banana', 'cherry', 'orange',
  'apple', 'cherry', 'orange',
  'apple', 'banana', 'cherry',
  'orange', 'fig'
]
const dataGroups = fruitBasket.reduce(
    (group, fruit) => {
        group[fruit] = (group[fruit] || 0) + 1
        return group
    },
    {}
)
console.log(dataGroups)
