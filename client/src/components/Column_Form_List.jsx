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
  console.log('got this many columns: ', props.columns)
  for (let i = 0; i < props.columns; i++) {
    columnFormJSX.push((<div>Column Form Goes Here</div>));
  }
  return (
    {columnFormJSX}
  )
}

export default Column_Form_List;