// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';
// Components
import Column_Form from './Column_Form.jsx';

const Column_Form_List = props => {
  let columnFormJSX = [];
  if (props.columns) {
    for (let i = 0; i < props.columns; i++) {
      if (props.parentId !== 'root') {
        columnFormJSX.push((
          <Column_Form
            key={i}
            columnId={`[${props.parentId}][${i}]`}
            handleFormChanges={props.handleFormChanges}
            updateChildColumns={props.updateChildColumns}
          />
        ));
      } else {
        columnFormJSX.push((
          <Column_Form
            key={i}
            columnId={`[${i}]`}
            handleFormChanges={props.handleFormChanges}
            updateChildColumns={props.updateChildColumns}
          />
        ));
      }
    }
    return columnFormJSX
  } else {
    return null;
  }
}

export default Column_Form_List;