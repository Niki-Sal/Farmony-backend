const db = require('../models')

const index = (req, res) => {
    console.log('=====> Displaying Posts')
    db.Post.find({
        category: 'Volunteer'
    }, 
    (err, foundPosts) => {
        if (err) console.log('Error in volunteer#index:', err)
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
        if (err) console.log('Error in volunteer#create', err)
        res.json(postCreated)
    })
}

module.exports = {
    index,
    create
};