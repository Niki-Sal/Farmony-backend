const db = require('../models')

// const index = () => {
//     db.Post.find({}, (err, foundPosts) => {
//         if (err) console.log('Error in viewpost#index', err);
//         res.json(foundPosts)
//     })

// }

const show = (req, res) => {
    console.log('=====> Inside GET /gardens/:id');
    console.log('=====> req.params');
    console.log(req.params); 

    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) console.log('Error in post#show:', err);
        res.json(foundPost);
    });
};

module.exports = {
    //index,
    show,
};