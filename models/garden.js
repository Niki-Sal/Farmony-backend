const mongoose = require('mongoose')


const gardenSchema = new mongoose.Schema({
    name: String,
    image: String,
    map: String,
    address: String,
    state: String,
    zip: Number,
    about: String,
    review: Array
});


const Garden = mongoose.model('Garden', gardenSchema);

module.exports = Garden