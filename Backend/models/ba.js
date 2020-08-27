const mongoose = require('mongoose');

const baSchema = mongoose.Schema({
  username: { type: String, required: true },
  ba: { type: String, required: true, unique: true },
  greets: {type: Number, required: true}
});

module.exports = mongoose.model('ba', baSchema);