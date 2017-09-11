'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IdeaSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  text: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  dept: {
      type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ideas', IdeaSchema);