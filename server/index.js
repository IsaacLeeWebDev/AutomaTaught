var express = require('express');
var bodyParser = require('body-parser');

var Models = require('../database/index.js');

var app = express();
const port = 9999;
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/public'));

app.get('/projects', function (req, res) {
  Models.getAllProjects(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/projects/:projectId', function (req, res) {
  Models.getProject(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.get('/users/:userId/:projectId', function (req, res) {
//   Models.getAllUsers(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.put('/users/:userId/:projectId', function (req, res) {
//   Models.getAllUsers(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.put('/users/:userId/:projectId/:ticketId', function (req, res) {
//   Models.getAllUsers(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });


app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});