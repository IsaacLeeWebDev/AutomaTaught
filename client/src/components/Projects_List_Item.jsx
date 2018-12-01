import React from 'react';
import {
  Well, Col, Row,
} from 'react-bootstrap';

const Projects_List_Item = (props) => (
  <Row>
    <Well bsSize="large" className="project_li">
      <Row>
        <h4>{ props.item.title }</h4>
      </Row>
      <Row sm={4}>
        <Well className="project_li_details">
          Hi there!
        </Well>
      </Row>
    </Well>
  </Row>
)

export default Projects_List_Item;

// stretch goal: progress bar