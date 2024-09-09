const object = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
};

console.log('for..in');
for (const key in object) {
  console.log(key, '=>', object[key]);
}

console.log('\nfor..of');
// Symbol.iterator symbol specifies the default iterator for an object
object[Symbol.iterator] = function* () {
  for (const k in this) {
    yield [k, this[k]];
  }
};
console.log(object);
for (const v of object) {
  console.log(v);
}

console.log(Object.keys(object));
Object.keys(object).forEach((k) => {
  console.log(object[k]);
});

console.log(Object.entries(object));

// console.log('--------------------');
const iterableMap = new Map([
  ['a', { a: [1, 2] }],
  ['b', { a: [2, 3] }],
  ['c', { a: [3, 4] }],
]);

for (const entry of iterableMap) {
  console.log(entry);
}

for (const [key, value] of iterableMap) {
  console.log('key =', key, 'value =', value);
}

[1, 2, 3].forEach((a) => console.log(a));
