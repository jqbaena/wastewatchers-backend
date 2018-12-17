'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../data/wastes.js');
const Waste = require('../models/waste.js');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return Waste.deleteMany({});
  })
  .then(() => {
    console.log('Empty db');
    return Waste.insertMany(data);
  })
  .then((results) => {
    console.log('You have some waste', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
