var express = require('express');
var bodyParser = require('body-parser');

var Users = require('../database/index.js');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/public'));

app.get('/users', function (req, res) {
  Users.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});