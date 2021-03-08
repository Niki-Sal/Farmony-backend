require('dotenv').config();
const mongoose = require('mongoose');


const connectionString = process.env.MONGO_URL || "mongodb://localhost:27017/farmony";
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = {
    Example: require('./example'),
    User: require('./user'),
    Garden: require('./garden'),
    Post: require('./post'),
    Category: require('./category')
};