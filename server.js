var express = require('express'),
app = express(),
port = process.env.PORT || 3300,
mongoose = require('mongoose'),
Task = require('./models/model'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jason:Monty2013@ds129394.mlab.com:29394/heroku_3c5gfdnk'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/routes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);