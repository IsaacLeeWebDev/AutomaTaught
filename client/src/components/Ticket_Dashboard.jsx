import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const Projects_List = (props) => (
  <div>
    <Row>
      <Col sm={5}>
        <h4 className="your_projects">Your Projects ( {props.items.length } projects open ) </h4>
      </Col>
      <Col sm={2} smOffset={3}>
        <Button bsStyle="success">Create a new project</Button>
      </Col>
    </Row>
    <Well bsSize="large">
      { props.items.map(item => <Projects_List_Item key={item._id} item={item}/>) }
    </Well>
  </div>
);

export default Projects_List;