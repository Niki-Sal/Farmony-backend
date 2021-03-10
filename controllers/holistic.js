const db = require('../models')

const index = (req, res) => {
    console.log('=====> Displaying Posts')
    db.Post.find({
        category: 'Holistic Hub'
    }, 
    (err, foundPosts) => {
        if (err) console.log('Error in holistic#index:', err)
        res.json(foundPosts)
    })
}

const create = (req, res) => {
    console.log('=====> Post Created')
    //db.post.create({
        // title: req.body.title,
        // username: user.username,
        // content: req.body.content,
        // category: 'Holistic Hub',
        // date: Date,
    //})
}

module.exports = {
    index,
    create
};