require('dotenv').config();
// A passport strategy for authenticating with a JSON Web Token
// This allows to authenticate endpoints using a token
const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

// Import user model
const { User } = require('../models');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    // Add code here
    passport.use(new Strategy(options, (jwt_payload, done) => {
        // Have a user that we're find by the id inside of the payload
        // When we get the user back, we'll check to see if user in DB
        User.findById(jwt_payload.id)
        .then(user => {
            // jwt_payload is an object that contains JWT info
            // done is callback that we will be using to return user or false
            if (user) {
                // if a user is found, return done with null (for error) and user
                return done(null, user);
            } else {
                // no user was found
                return done(null, false);
            }
        })
        .catch(error => {
            console.log('=====> Error below (passport.js)');
            console.log(error);
        })
    }))
}

//////////////////////////////////////////////
// const userOrNot = user ? done(null, user) : done(null, false);
// return userOrNot;