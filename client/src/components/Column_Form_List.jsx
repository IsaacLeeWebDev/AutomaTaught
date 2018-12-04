// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';
// Components
import Column_Form from './Column_Form.jsx';

const Column_Form_List = props => {
  console.log('List parentId', props.parentId);
  let columnFormJSX = [];
  if (props.columns) {
    for (let i = 0; i < props.columns; i++) {
      console.log(parseInt(props.parentId.split('').pop()));
      if (parseInt(props.parentId.split('').pop()) >= 0) {
        columnFormJSX.push((<Column_Form key={i} columnId={`${props.parentId}_${i}`}/>));
      } else {
        columnFormJSX.push((<Column_Form key={i} columnId={`${i}`}/>));
      }
    }
    return columnFormJSX
  } else {
    return null;
  }
}

export default Column_Form_List;