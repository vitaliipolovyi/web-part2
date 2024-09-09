function* yieldExample() {
  let index = 0;
  while (index <= 2) {
    yield index++;
  }
}

const gen = yieldExample();

// console.log(gen)
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen);
// console.log(gen.next().value);

while (!gen.next().done) {
  console.log('test');
}

function* asyncTask() {
  const result1 = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
  const result2 = yield fetch('https://jsonplaceholder.typicode.com/todos/2');

  return [result1, result2];
}

const iterator = asyncTask();
console.log(
  iterator.next().value.then((v) => {
    console.log(v);
    return iterator.next().value;
  })
);
// console.log(iterator.next());
