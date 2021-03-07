const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    content: String,
    date: Date
});



const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    comment: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post