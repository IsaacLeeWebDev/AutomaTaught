const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
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

const getAllProjects = () => {
  Project.find({});
};

const putProject = (project, callback) => {
  console.log('Should say a number and then \'string\' >>>>> ', project._id, typeof project._id);
  Project.findOneAndUpdate(
    {"_id": parseInt(project._id)},
    project,
    {"upsert": true},
    (err, users) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, users);
      }
    }
  );
};

const seedProjects = (projects, callback) => Project.insertMany(projects);

// const putTicket = (project, ticket, callback) => {
//   Project.findOneAndUpdate({}, (err, users) => {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, users);
//     }
//   });
// };

const methods = {
  getAllProjects,
  putProject,
  // putTicket,
}

module.exports = methods;