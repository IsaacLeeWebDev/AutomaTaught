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
import Project_Form_Step_4 from './Project_Form_Step_4.jsx';

class Project_Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "_id": props.projects.length,
      "createdAt": '',
      "deadline": '',
      "title": '',
      "subtitle": '',
      "appDescriptionParagraph": '',
      "challengeTitle": '',
      "challengeParagraph": '',
      "quoteFromCreator": '',
      "howToGetSteps": '',
      "whatPeopleAreSaying": '',
      "callToAction": '',
      "database": '',
      "tickets": [],
      "primaryRecordName": '',
      "primaryRecordExample" : [
        {
          name: '',
          createdOn: '',
          displayedOn: '',
          childColumns: 0,
          childColumnList: [],
        },
      ],
      "viewsRequired": [],
      "step": 1,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updatePrimaryRecordExample = this.updatePrimaryRecordExample.bind(this);
    this.renderProjectFormStep = this.renderProjectFormStep.bind(this);
    this.progressFormStep = this.progressFormStep.bind(this);
    this.regressFormStep = this.regressFormStep.bind(this);
  }

  handleInputChange(event) {
    console.log('input changed:\t', event.target.id, '\tvalue:\t', event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  progressFormStep() {
    this.setState({step: this.state.step + 1})
  }

  regressFormStep() {
    this.setState({step: this.state.step - 1})
  }

  submitForm() {
    $.ajax('/api/')
  }

  renderProjectFormStep() {
    if (this.state.step === 1) {
      return (<Project_Form_Step_1 handleInputChange={this.handleInputChange} newProject={this.state} />)
    } else if (this.state.step === 2) {
      return (<Project_Form_Step_2 handleInputChange={this.handleInputChange} newProject={this.state} />)
    } else if (this.state.step === 3) {
      return (<Project_Form_Step_3 handleInputChange={this.handleInputChange} newProject={this.state} primaryRecord={this.state.primaryRecordExample} updatePrimaryRecordExample={this.updatePrimaryRecordExample} />)
    } else if (this.state.step === 3) {
      return (<Project_Form_Step_4 handleInputChange={this.handleInputChange} newProject={this.state} />)
    }
  }

  updatePrimaryRecordExample(columnList) {
    console.log('updatePrimary columnList', columnList)
    this.setState({primaryRecordExample: columnList});
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
              &larr; Previous Step
            </Pager.Item>
            <Pager.Item next href="#" onClick={this.progressFormStep}>
              Next Step &rarr;
            </Pager.Item>
          </Pager>
        </Row>
      </Well>
    );
  }

};

export default Project_Form;

/*

  Requirements:
  - [X] three Form Step views
  - [X] a method which handles all input changes by id and value
  - [X] a way to paginate through the Form views
  - [ ] a way to submit them to the server at the end

*/

/*

Stretch Goals: -------------------------

  > Form validation
  > Personalized look
    - Just the View content. #101 is bae
    - Ticket color based on Completion State, Ticket Size, Time remaining

*/

