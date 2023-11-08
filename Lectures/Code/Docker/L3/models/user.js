const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName: { type: String, required: true, unique: false, max: 64 },
  username: { type: String, required: true, unique: true, max: 32 },
  password: { type: String, required: false, unique: false, max: 255 },
})

module.exports = mongoose.model('User', userSchema, 'user')
