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

    console.log('********* REQ PARAMS', req.params.id)
    console.log('********* REQ BODY', req.body.comment)

   const foundPost = await db.Post.findById({_id:req.params.id})
   foundPost.comment.push({
        name: req.body.comment.name,
        photo: req.body.comment.photo,
        content: req.body.comment.content,
        date: req.body.comment.date
   })
   console.log('************COMMENT ADDED')
   console.log(foundPost)
};

module.exports = {
    //index,
    index,
    show,
    create,
    update
};