'use strict'

const Serializable = Base => class extends Base {
  Serialize () {
    return JSON.stringify(this)
  }
}

const Taxable = Base => class extends Base {
  Tax () {
    this.price *= 1.2
    return this.price
  }
}

// const Autheticable = Base => class extends Base {
//   Auth () {
//     axios.post('user/auth', { login: 'u', password: '*****' })
//       .then(response => {
//         this.authed = true
//       })
//       .catch(error => {
//         this.authed = false
//       })
//   }
// }

class Order {
  constructor (num, price) {
    this.num = num
    this.price = price
  }
}

class SeriazableTaxableOrder extends Serializable(Taxable(Order)) { }
// const SeriazableTaxableOrder = Serializable(Taxable(Order))

const orderInstance = new SeriazableTaxableOrder(323, 333.33)
console.log(orderInstance.Tax())
console.log(orderInstance.Serialize())