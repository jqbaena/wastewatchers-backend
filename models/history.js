const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const historySchema = new Schema({
  amount: Number,
  day: Date,
  kind: {
    type: ObjectId,
    ref: 'Waste'
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
