// const person = {
//   firstName: 'John',
//   surname: 'Doe',
//   get fullName () {
//     return this.firstName + ' ' + this.surname
//   },
//   set fullName (value) {
//     let split = value.split(' ')
//     this.firstName = split[0]
//     this.surname = split[1]
//   }
// }

// console.log(person.fullName)
// console.dir(person)
// person.fullName = 'Tom Tom'
// console.dir(person)

function Dir (name) {
  this.name = name
  let own = 'daemon:daemon'

  this.getOwn = function () {
    return own
  }

  Object.defineProperty(this, 'group', {
    get: function () { return own.split(':')[0] },
    set: function (groupName) {
      const pieces = own.split(':')
      pieces[0] = groupName

      own = pieces.join(':')
    }
  })

  Object.defineProperty(this, 'user', {
    get: function () { return own.split(':')[1] },
    set: function (userName) {
      const pieces = own.split(':')
      pieces[1] = userName

      own = pieces.join(':')
    }
  })
}

const myDir = new Dir('Lab2')

myDir.group = 'am3'
console.log(myDir.getOwn())
myDir.user = 'am3_Stud'
console.log(myDir.getOwn())
