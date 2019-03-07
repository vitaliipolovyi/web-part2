'use strict'

const DISCOUNT = 0.5

class Product {
  constructor (sku, price) {
    this._sku = sku
    this._price = price
  }
  get discountedPrice () {
    return this._price * DISCOUNT
  }
  get sku () {
    return this._sku
  }
  set price (price) {
    if (isNaN(parseFloat(price)) || !isFinite(price)) {
      throw new Error('Not a number')
    }

    this._price = price
  }
}

const watch = new Product('AA333', 3000)
console.log(watch.discountedPrice)
// watch.discountedPrice = 2000
watch.price = 2000
// console.log(watch.discountedPrice)
watch.price = 'aAAAA'
