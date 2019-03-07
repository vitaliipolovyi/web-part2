function makeIterator (array) {
  let nextIndex = 0

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false } : { done: true }
    }
  }
}

const it = makeIterator([1, 2])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)
