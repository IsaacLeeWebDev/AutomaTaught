var express = require('express');
var bodyParser = require('body-parser');

var Models = require('../database/index.js');

var app = express();
const port = 9999;
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/public'));

app.get('/api/projects', function (req, res) {
  Models.getAllProjects()
  .then(data => res.json(data))
  .catch(err => res.sendStatus(500));
});

app.get('/api/projects/:projectId', function (req, res) {
  Models.getProject(req.params.projectId)
  .then(data => res.json(data))
  .catch(err => res.sendStatus(500));
});

app.put('/api/projects/', (req, res) => {

});

// app.put('/api/projects/:projectId/:ticketId', function (req, res) {
//   Models.getProject(req.params.projectId, req.params.ticketId)
//   .then(data => res.json(data))
//   .catch(err => res.sendStatus(500));
// });


app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});