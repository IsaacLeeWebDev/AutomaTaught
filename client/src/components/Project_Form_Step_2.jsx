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
            <FormControl type="text" placeholder="A(n) <One-word description of your product> app for <1-5 word description of your audience>" />
          </Col>
        </FormGroup>
    </Row>
    <Row>
      <h2> What does {props.newProject.title} do? </h2>
      <p> Format suggestion: </p>
      <p>{`${props.newProject.title} is a <brief description of product> that <action verbs> so that <audience> can <acheived result>`} </p>
      <FormGroup controlId="formHorizontalAudience">
        <FormControl componentClass="textarea" />
      </FormGroup>
    </Row>
    <Row>
      <h2>The problem that {props.newProject.title} solves </h2>
      <FormGroup controlId="formHorizontalChallengeSummary">
        <Col componentClass={ControlLabel} sm={1}>
          <p>Challenge Summary: </p>
        </Col>
        <Col sm={11}>
          <FormControl type="text" placeholder="Keep it to one sentence. Example: MVP projects are Hard!" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalAngryPeopleQuotes">
        <Col componentClass={ControlLabel} sm={1}>
          <p>Challenge Summary: </p>
        </Col>
        <Col sm={11}>
          <FormControl type="text" placeholder="Keep it to one sentence. Example: MVP projects are Hard!" />
        </Col>
      </FormGroup>
    </Row>
  </Form>
);

export default Project_Form_Step_2;

/*

 - [ ] a press release (See PRESS_RELEASE.md for a template)

*/