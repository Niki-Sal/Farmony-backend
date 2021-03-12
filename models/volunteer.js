const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
    
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;


