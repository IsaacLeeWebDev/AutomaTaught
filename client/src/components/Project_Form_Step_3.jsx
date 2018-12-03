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