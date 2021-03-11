// Imports
require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);

// App Set up
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // JSON parsing
app.use(cors()); // allow all CORS requests
app.use(passport.initialize());



// API Routes
app.get('/api/', (req, res) => {
  res.json({ name: 'FarmonyAPI', greeting: 'Welcome to the our API', author: 'Farmony Group', message: "Smile, you are being watched by the Backend Engineering Team" });
});

app.use('/api/examples', routes.example);
app.use('/api/gardens', routes.garden);
app.use('/api/users', routes.user);
<<<<<<< HEAD
app.use('api/holistichub', routes.holistic)
app.use('api/farmprofile', routes.garden )
app.use('api/buy', routes.buy)
app.use('api/volunteer', routes.volunteer)

=======
app.use('/api/holistic', routes.holistic)
app.use('/api/posts', routes.post)
>>>>>>> 7e852e1684f31a140fa9901e0e6dd5de018f9ddd

// Server
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

module.exports = server;