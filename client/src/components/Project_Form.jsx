import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader, Well
} from 'react-bootstrap';

class Project_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    "_id": props.projects.length,
    "title": '',
    "description": '',
    "createdAt": '',
    "deadline": '',
    "techChoices": {
      "database": '',
      "frontendFramework": '',
    },
    "tickets": [],
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
            <h3>When is your deadline?</h3>
            <input id="deadline" className="form_field" type="datetime-local" />
            <input id="title" className="form_field" type="datetime-local" />
            <input id="description" className="form_field" type="datetime-local" />
            <input id="database" className="form_field" type="datetime-local" />
            <input id="frontendFramework" className="form_field" type="datetime-local" />
            <a id="submit_project" > Create Project! </a>
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