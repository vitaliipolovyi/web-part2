const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  address: { type: String, required: true, max: 512 },
  type: { type: Schema.Types.ObjectId, ref: 'LocationType', required: true }
})

module.exports = mongoose.model('Location', locationSchema)
