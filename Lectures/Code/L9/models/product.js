const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  sku: { type: String, required: true, unique: true, max: 50 },
  name: { type: String, required: true, max: 250 },
  price: { type: Number, required: true, max: 999999 },
  weight: { type: Number, required: true, max: 999999 },
  volume: { type: Number, required: true, max: 9999 }
})

module.exports = mongoose.model('Product', productSchema)
