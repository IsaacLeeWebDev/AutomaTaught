// Packages
import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well, Pager
} from 'react-bootstrap';
// Components
import Project_Form_Step_1 from './Project_Form_Step_1.jsx';
import Project_Form_Step_2 from './Project_Form_Step_2.jsx';
import Project_Form_Step_3 from './Project_Form_Step_3.jsx';

class Project_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {
        "_id": props.projects.length,
        "createdAt": '',
        "deadline": '',
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
        "database": '',
        "tickets": [],
        "primaryRecordExample" : {},
        "viewsRequired": [],
      },
      step: 1,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderProjectFormStep = this.renderProjectFormStep.bind(this);
    this.progressFormStep = this.progressFormStep.bind(this);
    this.regressFormStep = this.regressFormStep.bind(this);
  }

  handleInputChange(event) {
    // event.target.id is the name of the state
    // event.target.value is the value to set it to
  }

  progressFormStep() {
    this.setState({step: this.state.step + 1})
  }

  regressFormStep() {
    this.setState({step: this.state.step - 1})
  }

  renderProjectFormStep() {
    if (this.state.step === 1) {
      return (<Project_Form_Step_1 />)
    } else if (this.state.step === 2) {
      return (<Project_Form_Step_2 />)
    } else if (this.state.step === 3) {
      return (<Project_Form_Step_3 />)
    }
  }

  render() {
    return(
      <Well>
        <Row>
          <Well>
            {this.renderProjectFormStep()}
          </Well>
        </Row>
        <Row>
          <Pager>
            <Pager.Item previous href="#" onClick={this.regressFormStep}>
              &larr; Previous Page
            </Pager.Item>
            <Pager.Item next href="#" onClick={this.progressFormStep}>
              Next Page &rarr;
            </Pager.Item>
          </Pager>
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