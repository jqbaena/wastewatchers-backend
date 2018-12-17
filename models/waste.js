const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wasteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['plastic', 'fuel', 'water', 'cigarettes', 'glass', 'clothes', 'paper', 'can', 'flight'],
    required: true
  },
  info: {
    type: String,
    required: true
  },
  imgURL: {
    type: String,
    required: true
  }
});

const Waste = mongoose.model('Waste', wasteSchema);

module.exports = Waste;
