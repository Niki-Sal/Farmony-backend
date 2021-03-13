const mongoose = require('mongoose')

const buySchema = new mongoose.Schema({
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

const Buy = mongoose.model('Buy', buySchema);

module.exports = Buy;