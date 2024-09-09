'use strict'

const name = 'root'
const mod = '0644'
const file = 'test.txt'
console.log('User: ' + name + ' [' + mod + '] ' + file)

const nameT = 'root'
const modT = '0644'
const fileT = 'test.txt'
console.log(`User: ${nameT} [${modT}] ${fileT}`)

console.log('line 1\n\
line 2')
console.log(`line 1
line 2`)

console.log('\u03A9String'.includes('\u03A9'))

const s1 = Symbol('aaaa')
const s2 = Symbol('aaaa')

console.log(s1 === s2)
