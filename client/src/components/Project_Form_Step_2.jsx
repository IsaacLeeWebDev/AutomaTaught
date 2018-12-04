import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

const Project_Form_Step_2 = props => (
  <Form inline>
    <Row>
      <h1>Your App's Press Release </h1>
      <FormGroup controlId="formInlineSubtitle_1">
        {props.newProject.title}: a(n)
        <FormControl type="text" placeholder="One-word description of your app" />
      </FormGroup>
      <FormGroup controlId="formInlineAudience">
        app for
        <FormControl type="text" placeholder="1-5 word description of your audience" />
      </FormGroup>
    </Row>
  </Form>
);

export default Project_Form_Step_2;

/*

 - [ ] a press release (See PRESS_RELEASE.md for a template)

*/