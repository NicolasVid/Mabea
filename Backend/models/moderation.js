const mongoose = require('mongoose');

const moderationSchema = mongoose.Schema({
  username: { type: String, required: true },
  ba: { type: String, required: true },
});

module.exports = mongoose.model('moderation', moderationSchema);