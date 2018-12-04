// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

const Column_Form = props => (
  <Row>
    <h4> Column 0 </h4>
    <FormGroup controlId="column_0_name">
      <Col componentClass={ControlLabel} sm={4}>Column Name</Col>
      <Col sm={8}>
        <FormControl id="column_0_name" className="form_field" type="text" />
      </Col>
    </FormGroup>
  </Row>
  <Row>
    <FormGroup controlId="column_0_datatype">
      <Col componentClass={ControlLabel} sm={4}>Column Type</Col>
      <Col sm={8}>
        <Radio name="column_0_datatype" inline>
          Value
        </Radio>{' '}
        <Radio name="column_0_datatype" inline>
          Secondary Column
        </Radio>{' '}
      </Col>
    </FormGroup>
  </Row>
  <Row>
    <FormGroup controlId="column_0_created_on">
      <Col componentClass={ControlLabel} sm={4}>Created On</Col>
      <Col sm={8}>
        <Radio name="column_0_created_on" inline>
          Homepage
        </Radio>{' '}
        <Radio name="column_0_created_on" inline>
          Its own view
        </Radio>{' '}
      </Col>
    </FormGroup>
  </Row>
  <Row>
    <FormGroup controlId="column_0_displayed_on">
      <Col componentClass={ControlLabel} sm={4}>Displayed on</Col>
      <Col sm={8}>
        <Radio name="column_0_displayed_on" inline>
          Homepage
        </Radio>{' '}
        <Radio name="column_0_displayed_on" inline>
          Its own view
        </Radio>{' '}
        <Radio name="column_0_displayed_on" inline>
          Both
        </Radio>{' '}
      </Col>
    </FormGroup>
  </Row>
  <Row>
    <Button> Add Column </Button>
  </Row>
);

export default Column_Form_List;