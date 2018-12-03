const testProjects = [
  {
    "_id": 0,
    "title": 'DB Project',
    "description": 'A test MVP project for my MVP project',
    "createdAt": new Date(),
    "deadline": new Date(),
    "techChoices": {
      "database": 'MongoDB',
      "frontendFramework": 'React',
    },
    "tickets": [
      {
        "id": 0,
        "title": 'Do Chores',
        "body": 'Clean all your dishes, and then put them away',
        "createdAt": new Date(),
        "completionState": false,
        "ticketType": 'defaultTicket',
      },
      {
        "id": 1,
        "title": 'Have fun',
        "body": 'Go out and meet some people, make some friends... or just do MVP all day up to you. But like, if you do that, I will think you\'re a weirdo... just putting that out there. I mean, life\'s not about programming. Like, even wierdo hippy emergence theorists have to get out of their fractal tetrahedral E8 Lattuce worship circles to take breaks for like... I dunno... Bacci ball probably',
        "createdAt": new Date(),
        "completionState": true,
        "ticketType": 'defaultTicket',
      },
    ],
  },
  {
    "_id": 1,
    "title": 'DB Project 2!!!!!',
    "description": 'Another test MVP project for my MVP project',
    "createdAt": new Date(),
    "deadline": new Date(),
    "techChoices": {
      "database": 'MongoDB',
      "frontendFramework": 'React',
    },
    "tickets": [
      {
        "id": 0,
        "title": 'Do Chores',
        "body": 'Clean all your dishes, and then put them away',
        "createdAt": new Date(),
        "completionState": false,
        "ticketType": 'defaultTicket',
      },
      {
        "id": 1,
        "title": 'Have fun',
        "body": 'Go out and meet some people, make some friends... or just do MVP all day up to you. But like, if you do that, I will think you\'re a weirdo... just putting that out there. I mean, life\'s not about programming. Like, even wierdo hippy emergence theorists have to get out of their fractal tetrahedral E8 Lattuce worship circles to take breaks for like... I dunno... Bacci ball probably',
        "createdAt": new Date(),
        "completionState": true,
        "ticketType": 'defaultTicket',
      },
    ],
  },
];

module.exports = testProjects;