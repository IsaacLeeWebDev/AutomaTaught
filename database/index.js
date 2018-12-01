// Todo: set up schema
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvpro');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const projectSchema = mongoose.Schema({
  _id: Number,
  title: String,
  description: String,
  createdAt: Date,
  deadline: Date,
  tickets: [
    {
      id: Number,
      title: String,
      body: String,
      createdAt: {
        type: Date,
        default: Date.now
      },
      completionState: Boolean,
      ticketType: {
        type: String,
        default: 'defaultTicket'
      },
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

const getAllProjects = function(callback) {
  Project.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};



const methods = {
  // getAllProjects,
  // putProject,
  // putTicket,
}

module.exports = methods;