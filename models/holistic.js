const mongoose = require('mongoose')

const holisticSchema = new mongoose.Schema({
    title: String,
    description: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
    
})

const Holistic = mongoose.model('Holistic', holisticSchema);

module.exports = Holistic;



