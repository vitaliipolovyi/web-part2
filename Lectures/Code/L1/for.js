const object = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3'
}

console.log('for..in')
for (const key in object) {
  console.log(key, '=>', object[key])
}

console.log('\nfor..of')
// Symbol.iterator symbol specifies the default iterator for an object
object[Symbol.iterator] = function * () {
  for (const k in this) {
    yield [k, this[k]]
  }
}

for (const [key, value] of object) {
  console.log(key, value)
}

// console.log('--------------------')
// const iterableMap = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// for (const entry of iterableMap) {
//   console.log(entry)
// }

// for (const [key, value] of iterableMap) {
//   console.log('key =', key, 'value =', value)
// }
