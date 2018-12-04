import React from 'react';
import $ from 'jquery';
import {
  Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';

const Project_Form_Step_3 = props => (
  <Form>
    <FormGroup controlId="primaryRecordName">
      <h3 componentClass={ControlLabel}> Name of your primary record:</h3>
      <Col sm={6}>
        <FormControl id="primaryRecordName" className="form_field" type="text" />
      </Col>
    </FormGroup>
    <FormGroup controlId="column_0_name">
      <Row>
        <h3>Primary Record Columns</h3>
        <Col componentClass={ControlLabel} sm={4}>Column Name</Col>
        <Col sm={8}>
          <FormControl id="column_0_name" className="form_field" type="text" />
        </Col>
      </Row>
      <Row>
        <Col componentClass={ControlLabel} sm={4}>Column Type</Col>
        <Col sm={8}>
          <Radio name="column_0_datatype" inline>
            Value
          </Radio>{' '}
          <Radio name="column_0_datatype" inline>
            Secondary Column
          </Radio>{' '}
        </Col>
      </Row>
      <Row>
        <Col componentClass={ControlLabel} sm={4}>Created On</Col>
        <Col sm={8}>
          <Radio name="column_0_datatype" inline>
            Homepage
          </Radio>{' '}
          <Radio name="column_0_datatype" inline>
            Its own view
          </Radio>{' '}
        </Col>
      </Row>
      <Row>
        <Col componentClass={ControlLabel} sm={4}>Displayed on</Col>
        <Col sm={8}>
          <Radio name="column_0_datatype" inline>
            Homepage
          </Radio>{' '}
          <Radio name="column_0_datatype" inline>
            Its own view
          </Radio>{' '}
          <Radio name="column_0_datatype" inline>
            Both
          </Radio>{' '}
        </Col>
      </Row>
    </FormGroup>
    <FormGroup controlId="primaryRecordColumnDataType">
      <h3>Primary Record Columns</h3>
      <Col componentClass={ControlLabel} sm={4}>Column Name</Col>
      <Col sm={8}>
        <FormControl id="columnName_1" className="form_field" type="text" />
      </Col>
    </FormGroup>
    <Button> Add Column </Button>
  </Form>
);

export default Project_Form_Step_3;


/*

    - [ ] Primary Record:
      - [ ] Add columns
        - [X] Name:
        - [X] Datatype: (one value, or secondary record)
          - [ ] if secondary record
            - [ ] recurse Add columns
            - [ ] How is secondary record created?
            - [ ] Submiting a form which belongs to a unique view
            - [ ] Triggering a non-form-related event
      - [ ] How is primary record created?
        - [ ] Submiting a form which belongs to a unique view
        - [ ] Triggering a non-form-related event
      - [ ] Should app have a homepage? (+1 view)
        - [ ] views.push('homepage_view)')
      - [ ] Where is the primary record displayed?
        - [ ] On the homepage
        - [ ] in a list, like a feed or list of profiles
          - [ ] views.push(list_name)
        - [ ] in its own view, like a map search result
          - [ ] views.push(list_item_name)
        - [ ] list & view but not homepage
          - [ ] views.push(list_name, list_item_name)
        - [ ] in a wizard
          - [ ] How many views/pages in the wizard?
          - [ ] views.concat([...wizard-pages/views])

*/