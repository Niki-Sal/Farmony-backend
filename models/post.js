const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    username: String,
    content: String,
    date: Date
});



const postSchema = new mongoose.Schema({
    title: String,
    profilePhoto: String,
    username: String,
    content: String,
    category: String,
    date: Date,
    comment: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post