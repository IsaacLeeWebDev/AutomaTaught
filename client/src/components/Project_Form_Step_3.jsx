import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

const Project_Form_Step_3 = props => (
  <Form>
    <FormGroup controlId="formHorizontalDeadline">
      <Col componentClass={ControlLabel} sm={4}>When is your deadline?</Col>
      <Col sm={8}>
        <FormControl id="deadline" className="form_field" type="datetime-local" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTitle">
      <Col componentClass={ControlLabel} sm={4}>What is this project called?</Col>
      <Col sm={8}>
        <FormControl id="title" className="form_field" />
      </Col>
    </FormGroup>
    </Form>
);

export default Project_Form_Step_3;


/*

  - [ ] Detail the tech choices and datashape
    - [ ] What tech choices the user makes
      - [ ] Database Selection
        - [ ] Ask whether or not bad read/write consistency would result in imprisonment
          - [ ] If so, ask whether or not they know Postgres
            - [ ] If so, they get Postgres
            - [ ] If not, they get MySQL
          - [ ] If not, they get MongoDB
    - [ ] Primary Record:
      - [ ] Add columns
        - [ ] Name:
        - [ ] Datatype: (one of int, string, date, boolean, or secondary record)
          - [ ] if secondary record
            - [ ] Like a List of things, or Like an object with properties?
            - [ ] recurse Add columns
      - [ ] should create a json object representing a primary record.
      - [ ] How is primary record created?
        - [ ] Submiting a form which belongs to a unique view
        - [ ] Triggering a non-form-related event
      - [ ] Should app have a homepage? (+1 view)
        - [ ] views.push('homepage_view)')
      - [ ] Where is the primary record displayed?
        - [ ] On the homepage
        - [ ] in a list, like a feed or list of profiles
          - [ ] views.push(list_name)
        - [ ] in its own view, like a map search result
          - [ ] views.push(list_item_name)
        - [ ] list & view but not homepage
          - [ ] views.push(list_name, list_item_name)
        - [ ] in a wizard
          - [ ] How many views/pages in the wizard?
          - [ ] veiws.concat([...wizard-pages/veiws])

*/