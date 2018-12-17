'use strict';

// Module dependencies
const express = require('express');
const router = express.Router();

const Waste = require('../models/waste');

router.get('/', (req, res, next) => {
  Waste.find()
    .then(waste => {
      if (!waste) {
        return res.status(404).json({
          error: 'products-not-found'
        });
      }
      return res.status(200).json(waste);
    })
    .catch(next);
});

// Export
module.exports = router;
