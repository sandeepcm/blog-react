const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {type: String, required: true},
  category: {type: String, enum: ['Agriculture', 'Business', 'Entertainment', 'Art', 'Investment', 'Uncategorized', 'Weather'], message: "{Value is not not supporteds}"},
  description: {type: String, required: true},
  creator: {type: Schema.Types.ObjectId, ref: "User" },
  thumbnail: {type: Number, default: 0}
}, {timestamps: true})

module.exports = model('User', postSchema)