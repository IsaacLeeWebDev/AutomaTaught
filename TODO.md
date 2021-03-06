
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

- [X] SETUP: ---------------------------------------------------------
  - [X] Fill out starter repo
    - [X] configure db
      - [X] Use MongoDB Promises
      - [X] Rename the Model
    - [X] rename the default components.
    - [X] configure webpack
    - [X] run build and start
  - [X] get Postman

- [X] ITERATION 1: MVPrimary GET --------------------------------------
  - [X] database/
    - [X] index.js/
      - [X] Define all necessary models:
        - [X] Projects (rewrite the starter schema)
    - [X] Model methods
      - [X] GET projects
      - [X] Outline PUT project
      - [X] Outline PUT ticket
      - [X] Create a js file that insertMany()'s an array with a couple primary rows.
      - [X] Insert the primary records.
  - [X] server/server.js
    - [X] Finish GET projects
    - [X] Outline PUT project
    - [X] Outline PUT ticket
  - [X] Client/src/components
    - [X] Complete a rough version the components needed to get all projects by ID
      - [X] App.jsx
      - [X] Projects_List.jsx
      - [X] Projects_List_Item.jsx

- [X] ITERATION 2: MVProjects Dashboard ------------------------------
  - [X] client/src/components
    - [X] New File Projects_Dashboard.jsx
      - [X] Create a hello-world div for this file
      - [X] Display all project details
      - [X] New File: client/src/components/Tickets_List.jsx
        - [X] Should display how many tickets remain
        - [X] Should create several Ticket components.
          - [X] New File: client/src/Tickets_List.jsx
              - [X] Should display all information besides ticket id
              - [X] Should have Complete Ticket button
              - [X] Should have Edit Ticket Button
              - [X] Should have Delete Ticket Button
    - [X] App.jsx
      - [X] Bulid View Changer method (app has mulitple pages)
        - [ ] Should be passed to the following components:
          - [X] Projects_List_Item components
          - [X] Create New Project button
          - [X] Create New Ticket buttons
          - [X] Edit Ticket buttons
          - [X] "Your Projects" in the Nav bar
      - [X] Build a render view method (app has mulitple pages)
    - [X] Test if renderView works

- [ ] ITERATION 3: MVPut NEW PROJECT ------------------------------
  - [X] client/src/components
    - [X] New File: Project_Form.jsx
      - [X] implement a form that builds a new project, which includes all details in Project_Form.jsx:
  - [ ] server/index.js
    - [ ] Finish PUT project
    - [ ] Outline PUT ticket
  - [ ] database/
    - [ ] index.js
      - [ ] update schema to make sure that all fields are properly included:
      - [ ] Finish PUT project model code
      - [ ] Outline PUT ticket model code
      - [ ] test PUT project through Postman
  - [ ] client/src/components
    - [ ] test PUT project from the front end
    - [ ] test PUT ticket from the front end

- [ ] ITERATION 4: MVPut update existing project -------------------
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

- [ ] ITERATION 5: MVPut new ticket ------------------------------
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

- [ ] ITERATION 6: MVPut existing ticket ------------------------------
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

- [ ] ITERATION 7: MVP DELETE --------------------------------------
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

- [ ] ITERATION 8: MVPollishing --------------------------------------
  - [ ] Add justification to all your tickets
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
    - [ ] Seed script
      - [ ] Generate 100 primary records with faker
      - [ ] Seed MongoDB with your seed script
      - [ ] test GET projects to make sure it still works
