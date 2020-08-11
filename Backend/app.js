const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const baRoutes = require('./routes/ba');
const userRoutes = require('./routes/user');
const moderationRoutes = require('./routes/moderation');

const app = express();

mongoose.connect('mongodb+srv://'+process.env.MONGODB_ID+':'+process.env.MONGODB_PASSWORD+'@cluster0-6xnir.mongodb.net/Cluster0?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/ba', baRoutes);
app.use('/api/moderation', moderationRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;