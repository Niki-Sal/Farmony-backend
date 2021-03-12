const db = require('../models')

// const index = () => {
//     db.Post.find({}, (err, foundPosts) => {
//         if (err) console.log('Error in viewpost#index', err);
//         res.json(foundPosts)
//     })

// }
const index = (req, res) => {
    console.log('=====> Inside GET /posts');

    db.Post.find({}, (err, foundPosts) => {
        if (err) console.log('Error in post#index:', err);
        res.json(foundPosts);
    });
}

const show = (req, res) => {
    console.log('=====> Inside GET /posts/:id');
    console.log('=====> req.params');
    console.log(req.params); 

    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) console.log('Error in post#show:', err);
        res.json(foundPost);
    });
};

const create = (req, res) => {
    console.log('=====> Inside POST /posts');
    console.log('=====> req.body');
    console.log(req.body); 

    db.Post.create(req.body, (err, savedPost) => {
        if (err) console.log('Error in post#create:', err);
        res.json(savedPost);
    });
};

const update = async (req, res) => {
    console.log('=====> Inside GET /users/:id');
    console.log('=====> req.params');
    console.log(req.params); 

    const newComment = await new Comment(req.body)

    await db.Post.findByIdAndUpdate({_id:req.params.id}, newComment, (err, foundPost) => {
        
        foundPost.comment.push(newComment)
        foundPost.save()
        if (err) console.log('Error in post#update:', err);
        
        res.json(foundPost);
    })

};

module.exports = {
    //index,
    index,
    show,
    create,
    update
};