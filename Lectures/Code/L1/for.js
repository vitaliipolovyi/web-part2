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
object[Symbol.iterator] = function * () {
  for (const k in this) {
    yield [k, this[k]]
  }
}

for (const val of object) {
  console.log(val)
}
