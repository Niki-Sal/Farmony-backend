const db = require('../models');

const index = (req, res) => {
    // Purpose: Fetch all examples from DB and return
    console.log('=====> Inside GET /examples');

    db.Garden.find({}, (err, foundGardens) => {
        if (err) console.log('Error in example#index:', err);
        res.json(foundGardens);
    });
}

const show = (req, res) => {
    // Purpose: Fetch one example from DB and return
    console.log('=====> Inside GET /examples/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id

    db.Garden.findById(req.params.id, (err, foundGarden) => {
        if (err) console.log('Error in example#show:', err);
        res.json(foundGarden);
    });
};

const create = (req, res) => {
    // Purpose: Create one example by adding body to DB, and return
    console.log('=====> Inside POST /examples');
    console.log('=====> req.body');
    console.log(req.body); // object used for creating new example

    db.Garden.create(req.body, (err, savedGarden) => {
        if (err) console.log('Error in example#create:', err);
        res.json(savedGarden);
    });
};

const update = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside PUT /examples/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    console.log('=====> req.body');
    console.log(req.body); // object used for updating example

    db.Garden.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGarden) => {
        if (err) console.log('Error in example#update:', err);
        res.json(updatedGarden);
    });
};

const destroy = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside DELETE /examples/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    
    db.Garden.findByIdAndDelete(req.params.id, (err, deletedGarden) => {
        if (err) console.log('Error in example#destroy:', err);
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
