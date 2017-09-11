'use strict';
module.exports = function(app) {
  var ideaBin = require('../controllers/controller');

  // todoList Routes
  app.route('/ideas')
    .get(ideaBin.list_all_ideas)
    .post(ideaBin.create_a_idea);


  app.route('/ideas/:ideaId')
    .get(ideaBin.read_a_idea)
    .put(ideaBin.update_a_idea)
    .delete(ideaBin.delete_a_idea);
};