const db = require('../models');

const index = (req, res) => {
    console.log('=====> Inside GET /gardens');

    db.Garden.find({}, (err, foundGardens) => {
        if (err) console.log('Error in garden#index:', err);
        res.json(foundGardens);
    });
}

const show = (req, res) => {
    console.log('=====> Inside GET /gardens/:id');
    console.log('=====> req.params');
    console.log(req.params); 

    db.Garden.findById(req.params.id, (err, foundGarden) => {
        if (err) console.log('Error in garden#show:', err);
        res.json(foundGarden);
    });
};

const create = (req, res) => {
    console.log('=====> Inside POST /gardens');
    console.log('=====> req.body');
    console.log(req.body); 

    db.Garden.create(req.body, (err, savedGarden) => {
        if (err) console.log('Error in garden#create:', err);
        res.json(savedGarden);
    });
};

const update = (req, res) => {
    console.log('=====> Inside PUT /gardens/:id');
    console.log('=====> req.params');
    console.log(req.params); 
    console.log('=====> req.body');
    console.log(req.body);

    db.Garden.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGarden) => {
        if (err) console.log('Error in garden#update:', err);
        res.json(updatedGarden);
    });
};

const destroy = (req, res) => {
    console.log('=====> Inside DELETE /gardens/:id');
    console.log('=====> req.params');
    console.log(req.params); 
    
    db.Garden.findByIdAndDelete(req.params.id, (err, deletedGarden) => {
        if (err) console.log('Error in garden#destroy:', err);
          res.sendStatus(200);
          console.log(deletedGarden);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
