const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    productscategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category