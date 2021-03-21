// Imports
require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override')
const imagesController = require('./controllers/images');

// App Set up
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // JSON parsing
app.use(cors()); // allow all CORS requests



app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// API Routes
app.get('/api/', (req, res) => {
  res.json({ name: 'FarmonyAPI', greeting: 'Welcome to the our API', author: 'Farmony Group', message: "Smile, you are being watched by the Backend Engineering Team" });
});



app.use('/api/gardens', routes.garden);
app.use('/api/users', routes.user);
app.use('/api/holistic', routes.holistic)
app.use('/api/trade', routes.trade)
app.use('/api/buy', routes.buy)
app.use('/api/posts', routes.post)
app.use('/api/volunteer', routes.volunteer)
app.use('/api/images', imagesController); 

// Server
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));


module.exports = server;