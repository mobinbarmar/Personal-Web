const mongoose = require('mongoose');
const { testSchema } = require('../schemas/test.schemas');

// Create provider model
const Test = mongoose.model('tests', testSchema)

module.exports = { Test }