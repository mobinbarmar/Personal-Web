const mongoose = require('mongoose');
const { testSchema, postSchema } = require('../schemas/test.schemas');

// Create provider model
const Test = mongoose.model('tests', testSchema)
const Post = mongoose.model('posts', postSchema)

module.exports = {
    Test,
    Post
}