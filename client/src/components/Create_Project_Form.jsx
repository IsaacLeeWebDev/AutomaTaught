import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader
} from 'react-bootstrap';

class Create_Project_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    "_id": props.projects.tickets.length,
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
    <div>Hello World!</div>
  }

};

export default Create_Project_Form;

// stretch goal: Form validation
// stretch goal: Personalized look