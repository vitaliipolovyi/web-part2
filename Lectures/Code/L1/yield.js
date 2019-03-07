function * yieldExample () {
  let index = 0
  while (true) {
    yield index++
  }
}

const gen = yieldExample()

console.log(gen)
console.log(gen.next())
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
