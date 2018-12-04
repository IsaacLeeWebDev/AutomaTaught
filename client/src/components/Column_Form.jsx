// Packages
// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';
// Components
import Column_Form_List from './Column_Form_List';

class Column_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childColumns: 0,
      childColumnsList: []
    }
    this.addSecondaryColumn = this.addSecondaryColumn.bind(this);
  }

  addSecondaryColumn() {
    this.setState({ childColumns:this.state.childColumns + 1, childColumnsList:this.state.childColumnsList.concat([{name: '', childColumnsList: [], childColumns: 0, createdOn: '', displayedOn: '' }]) });
    setTimeout(() => {
      this.props.updatePrimaryRecordExample()
    });
  }

  render() {
    return (
      <Row>
        <Row>
          <h4> Column{this.props.columnId} </h4>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>Column Name</Col>
            <Col sm={8}>
              <FormControl id={`["columns"][${this.props.columnId}]["name"]`} className="form_field" type="text" onChange={this.props.handleFormChanges} />
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>Created On</Col>
            <Col sm={8}>
              <Radio name={`["columns"][${this.props.columnId}]["created_on"]`} inline>
                Homepage
              </Radio>{' '}
              <Radio name={`["columns"][${this.props.columnId}]["created_on"]`} inline>
                Its own view
              </Radio>{' '}
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>Displayed on</Col>
            <Col sm={8}>
              <Radio name={`["columns"][${this.props.columnId}]["displayed_on"]`} inline>
                Homepage
              </Radio>{' '}
              <Radio name={`["columns"][${this.props.columnId}]["displayed_on"]`} inline>
                Its own view
              </Radio>{' '}
              <Radio name={`["columns"][${this.props.columnId}]["displayed_on"]`} inline>
                Both
              </Radio>{' '}
            </Col>
          </FormGroup>
        </Row>
        <Button onClick={this.addSecondaryColumn}>Add Child Column</Button>
        <Row>
          <Col smOffset={1}>
            <Column_Form_List columns={this.state.childColumns} parentId={`${this.props.columnId.slice(1, this.props.columnId.length - 1)}`} />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Column_Form;