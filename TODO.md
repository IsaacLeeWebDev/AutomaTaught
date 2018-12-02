
# TODO for MVPro

- [X] Create PRESS_RELEASE.md
- [X] Describe wishlist
- [ ] Finish this TODO!

## Frameworks:

- React
- jquery requests
- Express
- MongoDB / Mongoose

## FEATURES

- [ ] SETUP: --------------------------------------
  - [X] Fill out starter repo
    - [X] configure db
      - [X] Use MongoDB Promises
      - [X] Rename the Model
    - [X] rename the default components.
    - [X] configure webpack
    - [X] run build and start
  - [ ] get Postman

- [ ] ITERATION 1: MVPrimary GET --------------------------------------
  - [ ] database/
    - [X] index.js/
      - [X] Define all necessary models:
        - [X] Projects (rewrite the starter schema)
    - [X] Model methods
      - [X] GET project
      - [X] PUT project (JUST AN OUTLINE!)
      - [X] PUT ticket (JUST AN OUTLINE!)
    - [ ] insert a couple records to MongoDB directly through the mongo shell
        - [X] Create insertMany script
        - [X] Create a js file that exports a couple db.insertOne invokations with sample objects
        - [ ] Insert the primary records.
  - [X] Server
    - [X] Finish GET project
    - [X] Outline PUT project
    - [X] Outline PUT ticket
  - [X] Client/src/components
    - [X] Complete a rough version the components needed to get a project by ID
      - [X] App.jsx
      - [X] Projects_List.jsx
      - [X] Projects_List_Item.jsx


- [ ] ITERATION 2: MVPut --------------------------------------
  - [ ] Seed script
    - [ ] Generate 100 primary records with faker
    - [ ] Seed MongoDB with your seed script
    - [ ] test GET projects to make sure it still works
  - [ ] database/
    - [ ] index.js
      - [ ] Finish PUT project
      - [ ] Outline PUT ticket
      - [ ] test PUT project through Postman
  - [ ] server/
    - [ ] Create the following routes:
      - [ ] Finish PUT project
      - [ ] Outline PUT ticket
  - [ ] client/src/components
    - [ ] create a new file for all the form view components
    - [ ] test PUT project from the front end
    - [ ] test PUT ticket from the front end

- [ ] ITERATION 3: MVPut Secondary_1 --------------------------------------
  - [ ] database/
    - [ ] index.js
      - [ ] Finish PUT ticket
      - [ ] Outline DELETE project
  - [ ] server/
    - [ ] Create the following routes:
      - [ ] Finish PUT /api/:projectId/:ticketId
      - [ ] Outline DELETE project /api/:projectId/:ticketId
  - [ ] client/src/components
    - [ ] Add an edit button to your projects
    - [ ] Add an edit button to your tickets
    - [ ] test PUT ticket from the front end

- [ ] ITERATION 4: MVP DELETE --------------------------------------
  - [ ] ITERATRION 4a: MVPrimary DELETE
    - [ ] database/
      - [ ] index.js
    - [ ] server/
      - [ ] index.js
        - [ ] add a DELETE /api/:projectId/
    - [ ] client/src/components
      - [ ] Add a delete button to tickets
      - [ ] test delete projects from the front end
  - [ ] ITERATRION 4b: MVP Secondary_1 DELETE
    - [ ] database/
      - [ ] index.js
    - [ ] server/
      - [ ] index.js
        - [ ] add a DELETE /api/:projectId/:ticketId/
    - [ ] client/src/components
      - [ ] Add a delete button to tickets
      - [ ] test delete projects from the front end

- [ ] ITERATION 5: MVPollishing
  - [ ] Give everything a solid refactor.
    - [ ] client/
    - [ ] server/
    - [ ] database/
  - [ ] Start adding doodads:
    - [ ] add stretch goals below:
    - [ ] Add HELPFUL LINKS and ENGINEERING JOURNAL to PROJECTS!
      - [ ]
    - [ ] Add REQUIREMENTS CONSOLIDATION and HELPFUL LINKS to tickets!
      - [ ]
    - [ ] Add PERSONALIZED LOOKS to PROJECTS!
      - [ ]
