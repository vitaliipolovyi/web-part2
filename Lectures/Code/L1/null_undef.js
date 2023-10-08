'use strict'

let undef
console.log(undef, typeof undef)

let nullable = null
console.log(nullable, typeof nullable)

console.log(undef == nullable)
console.log(undef === nullable)

console.log(Number('1.2a'))
console.log(Number.isNaN(parseFloat('2.1')));
console.log(isNaN(parseFloat('2.1')));
console.log(Number.parseFloat(), Number.POSITIVE_INFINITY)

const n = 10000.333
console.log(n.toLocaleString(1))