import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

class Project_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    "_id": props.projects.length,
    "createdAt": '',
    "deadline": '',
    "database": '',
    "pressReleaseDetails": {
      "title": '',
      "subtitle": '',
      "appDescriptionParagraph": '',
      "hypotheticalComplaints1": '',
      "hypotheticalComplaints2": '',
      "hypotheticalComplaints3": '',
      "appSolutionPitch": '',
      "quoteFromCreator": '',
      "howToGetSteps": [],
      "whatPeopleAreSaying": '',
      "callToAction": '',
    },
    "tickets": [],
    "primaryRecordExample" : {},
    "viewsRequired": [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {

  }

  render() {
    return(
      <Well>
        <Row>
          <Well>
            <Form horizontal>
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
              <FormGroup controlId="formHorizontalDescription">
                <Col componentClass={ControlLabel} sm={4}>When is your deadline?</Col>
                <Col sm={8}>
                  <FormControl id="deadline" className="form_field" type="text-area" />
                </Col>
              </FormGroup>
              <FormControl id="database" className="form_field" type="datetime-local" />
              <FormControl id="frontendFramework" className="form_field" type="datetime-local" />
              <a id="submit_project" className="btn btn-success"> Create Project! </a>
            </Form>
          </Well>
        </Row>
      </Well>
    );
  }

};

export default Project_Form;

/*
Stretch Goals: -------------------------

  > Form validation
  > Personalized look
    - Just the View content. #101 is bae
    - Ticket color based on Completion State, Ticket Size, Time remaining
*/