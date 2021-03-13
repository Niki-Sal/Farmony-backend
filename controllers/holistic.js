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
const show = (req, res) => {
    console.log('=====> Inside GET /buy/:id');
    console.log('=====> req.params');
    console.log(req.params); 

    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) console.log('Error in holistic#show:', err);
        res.json(foundPost);
    });
}

const update = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside PUT /holistic/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    console.log('=====> req.body');
    console.log(req.body); // object used for updating example
  
  

    db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
        if (err) console.log('Error in holistic#update:', err);
        res.json(updatedPost);
    });
};

module.exports = {
    index,
    create,
    show,
    update,
};
