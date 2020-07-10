const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  username: { type: String, required: true },
  ba: { type: String, required: true },
  display: {type: Boolean, required: true},
  greets: {type: Number, required: true}
});

module.exports = mongoose.model('Thing', thingSchema);