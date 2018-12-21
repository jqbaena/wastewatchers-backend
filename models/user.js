const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const History = require('./history');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  typeChallenge: String,
  challengeTimeLeft: Number,
  challengeAchieved: Boolean,
  wastes: [History.schema]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    challengeCreatedAt: 'challengeCreatedAt'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
