function * yieldExample () {
  let index = 0
  while (index <= 2) {
    yield index++
  }
}

const gen = yieldExample()

// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen)
// console.log(gen.next().value)

while (!gen.next().done) {
  console.log('test')
}