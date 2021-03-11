const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;