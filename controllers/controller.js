'use strict';


var mongoose = require('mongoose'),
  Idea = mongoose.model('Ideas');

exports.list_all_ideas = function(req, res) {
    Idea.find({}, function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};




exports.create_a_idea = function(req, res) {
  var new_idea = new Idea(req.body);
  new_idea.save(function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};


exports.read_a_idea = function(req, res) {
    Idea.findById(req.params.ideaId, function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};


exports.update_a_idea = function(req, res) {
    Idea.findOneAndUpdate({_id: req.params.ideaId}, req.body, {new: true}, function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};


exports.delete_a_idea = function(req, res) {


    Idea.remove({
    _id: req.params.ideaId
  }, function(err, idea) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


