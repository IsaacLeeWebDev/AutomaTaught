import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

const Project_Form_Step_2 = props => (
  <Form horizontal>
    <Row>
      <h1>{props.newProject.title}'s Press Release: </h1>
        <FormGroup controlId="formHorizontalSubtitle">
          <Col componentClass={ControlLabel} sm={1}>
            <p>Subtitle: </p>
          </Col>
          <Col sm={11}>
            <FormControl onChange={props.handleInputChange} id="subtitle" type="text" placeholder="A(n) <One-word description of your product> app for <1-5 word description of your audience>" />
          </Col>
        </FormGroup>
    </Row>
    <Row>
      <h2> What does {props.newProject.title} do? </h2>
      <p> Format suggestion: </p>
      <p>{`${props.newProject.title} is a <brief description of product> that <action verbs> so that <audience> can <acheived result>`} </p>
      <FormGroup controlId="formHorizontalDescriptionParagraph">
        <FormControl onChange={props.handleInputChange} id="appDescriptionParagraph" componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <h2>The problem that {props.newProject.title} solves: </h2>
      <FormGroup controlId="formHorizontalChallengeSummary">
        <Col componentClass={ControlLabel} sm={2}>
          <p>Challenge Summary: </p>
        </Col>
        <Col sm={10}>
          <FormControl onChange={props.handleInputChange} id="challengeTitle" type="text" placeholder="Keep it to one sentence. Example: MVP projects are Hard!" />
        </Col>
      </FormGroup>
    </Row>
    <Row>
      <FormGroup controlId="formHorizontalAngryPeopleQuotes">
        <h2> Is this you? </h2>
        <p> Formatting suggestion: "Have you ever (heard/felt/thought) these things?</p>
        <p> (Big list of quotes from people who are upset that they have to deal with the problems that your app solves)</p>
        <p> {props.newProject.title} solves this problem by (action verbs) resulting in (result achieved)</p>
        <FormControl onChange={props.handleInputChange} id="challengeParagraph" componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <FormGroup controlId="quoteFromCreator">
        <h2>A Quote from you</h2>
        <p> Formatting suggestion: "Have you ever (heard/felt/thought) these things?</p>
        <p> (Big list of quotes from people who are upset that they have to deal with the problems that your app solves)</p>
        <p> {props.newProject.title} solves this problem by (action verbs) resulting in (result achieved)</p>
        <FormControl onChange={props.handleInputChange} id="quoteFromCreator" componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <FormGroup controlId="howToGetSteps">
        <h2>How to get {props.newProject.title} </h2>
        <p> Formatting suggestion:</p>
        <p>How to get {props.newProject.title}:</p>
        <p> 1. clone this repo </p>
        <p> 2. run npm install </p>
        <p> 3. run npm build </p>
        <p> 4. run npm start </p>
        <p> 5. open browser and go to localhost:3000 </p>
        <p> {props.newProject.title} solves this problem by (action verbs) resulting in (result achieved)</p>
        <FormControl onChange={props.handleInputChange} id="howToGetSteps" componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <FormGroup controlId="whatPeopleAreSaying">
        <h2>What people are saying section: </h2>
        <p> Formatting suggestion:</p>
        <p> What people are saying: </p>
        <p> "Cool. Looks good." </p>
        <p> --Shi Hao, Galvanize Tech Mento </p>
        <p> "Wait, did you type all this out? I thought you just forked it." </p>
        <p> --Jay, a guy who was on my SDC Team </p>
        <p> {props.newProject.title} solves this problem by (action verbs) resulting in (result achieved)</p>
        <FormControl onChange={props.handleInputChange} id="whatPeopleAreSaying" componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <FormGroup controlId="callToAction">
        <h2>Call to Action section: </h2>
        <p> Formatting suggestion:</p>
        <p> What you should do now: </p>
        <p> You probably already know this, but like, please go fork and clone this repo and then donate lots of money to my Venmo account or something.</p>
        <FormControl onChange={props.handleInputChange} id="callToAction" componentClass="textarea" />
      </FormGroup>
    </Row>
  </Form>
);

export default Project_Form_Step_2;

/*

 - [X] a press release (See PRESS_RELEASE.md for a template)

*/