// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';
// Components
import Column_Form_List from './Column_Form_List.jsx';

class Project_Form_Step_3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 1,
      columnsList: [
        {
          name: '',
          createdOn: '',
          displayedOn: '',
          childColumns: [],
        },
      ],
    };
    this.addColumn = this.addColumn.bind(this);
    this.updateChildColumns = this.updateChildColumns.bind(this);
    this.handleFormChanges = this.handleFormChanges.bind(this);
  }

  addColumn() {
    this.setState({columns: this.state.columns + 1, columnsList: this.state.columnsList.concat([{name: '', childColumns:[], displayedOn: '', createdOn: ''}])});
    setTimeout(() => {
      this.props.updatePrimaryRecordExample(this.state.columnsList);
    }, 0)
  }

  updateChildColumns(childCols) {
    let myCols = this.state.columnsList;
    myCols.childColumns = childCols;
    this.setState({ columnsList: myCols});
    setTimeout(() => {
      this.props.updatePrimaryRecordExample(this.state.columnsList);
    }, 0)
  }

  handleFormChanges(event) {
    console.log('id:', event.target.id, 'value:', event.target.value);
  }

  render() {
    console.log('PROJECT FORM RENDERED-------------');
    return (
      <Form>
        <Row>
          <FormGroup controlId="primaryRecordName">
            <h3> Name of your primary record:</h3>
            <Col sm={6}>
              <FormControl id="primaryRecordName" className="form_field" type="text" onChange={this.props.handleInputChange}/>
            </Col>
          </FormGroup>
        </Row>
        <h3>Primary Record Columns</h3>
        <Column_Form_List
          columns={this.state.columns}
          parentId={'root'}
          handleFormChanges={this.handleFormChanges}
          primaryRecord={this.props.primaryRecord}
          updateChildColumns={this.updateChildColumns}
        />
        <Row>
          <Button className="btn btn-success" onClick={this.addColumn}> Add Column </Button>
        </Row>
      </Form>
    );
  }
}
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