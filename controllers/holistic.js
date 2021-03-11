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
    db.Post.create({
        title: req.body.title,
        name: req.user.name,
        content: req.body.content,
        category: req.body.category,
        date: Date(),
    },(err, postCreated) => {
        if (err) console.log('Error in holistic#create', err)
        res.json(postCreated)
    })
}

module.exports = {
    index,
    create
};
