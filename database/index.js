// Todo: set up schema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  _id: Number,
  username: String,
  projects: [
    {
      id: Number,
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
    },
  ],
});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

module.exports.selectAll = selectAll;