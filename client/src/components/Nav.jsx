// Packages
import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader, Button
} from 'react-bootstrap';

const Nav = (props) => (
  <Row>
    <Col sm={5}>
      <h4 className="your_projects" onClick={() => props.changeView('Projects_List')} >Your Projects ( {props.projects.length } projects open ) </h4>
    </Col>
    <Col sm={2} smOffset={3}>
      <a className="btn btn-success" onClick={() => props.changeView('Project_Form')}>Create a new project</a>
    </Col>
  </Row>
);

export default Nav;