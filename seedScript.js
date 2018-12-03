
// ITERATION 1: SEED TEST PROJECTS ----
const testProjects = require('testProjects.js');
const Models = require('./database/index.js');

Models.seedProjects(testProjects)
.then()
.catch()
// then log something

// Stretch Goal: ----------------------

// const faker = require('faker');

// generate random projects
  // generate random tickets for each project
// insert randomly generate projects into DB

