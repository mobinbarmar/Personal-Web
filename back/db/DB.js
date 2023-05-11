const mongoose = require('mongoose');
const { Test, Post } = require('../models/model');

// Connection URI to MongoDB
// const uri = 'mongodb://localhost:27023/test_db'
const uri = 'mongodb+srv://mobin_barmar:f2AkqRDH0rTfIsTK@cluster0.6fcalsg.mongodb.net/personal_db'

mongoose.set('strictQuery', false);


// Make db connection (asychronously)
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => {
        console.log('Successful Connection!')
    }).catch((err) => console.log(err))


module.exports = {
    Test,
    Post
}