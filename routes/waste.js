'use strict';

// Module dependencies
const express = require('express');
const router = express.Router();
const Waste = require('../models/waste');
const User = require('../models/user');
const History = require('../models/history');

router.get('/wastes', (req, res, next) => {
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

router.post('/wastes/add', (req, res, next) => {
  const userId = req.session.currentUser;
  const wasteData = req.body;
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({
          error: 'user-not-found'
        });
      }
      const newHistory = new History({
        amount: wasteData.amount,
        day: wasteData.day,
        kind: wasteData.wastes
      });
      user.wastes.push(newHistory);
      user.save()
        .then(response => {
          res.status(200).json({
            result: 'saved',
            response
          });
        })
        .catch(next);
    })
    .catch(next);
});

router.get('/profile', (req, res, next) => {
  const userId = req.session.currentUser;
  const amountDaywaste = {
    amount: 0,
    day: 0,
    waste: 0
  };
  User.findById(userId)
    .populate({
      path: 'wastes.kind'
    })
    .then(waste => {
      amountDaywaste.waste = waste;
      console.log(waste);
      res.status(200).json(waste);
    })
    .catch(next);
});

// Export
module.exports = router;
