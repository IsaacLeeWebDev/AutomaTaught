import React from 'react';
import {
  Well, Col, Row,
} from 'react-bootstrap';

const Projects_List_Item = (props) => (
  <Row>
    <Well bsSize="large" className="project_li" onClick={() => }>
      <Row>
        <Col mdOffset={1}>
          <h3>{ props.item.title }</h3>
        </Col>
      </Row>
      <Row>
        <Well className="project_li_details">
          <Row>
          <Col sm={4}>
            <Well bsSize="large" className="project_li_details_well">
              Total Tickets
            </Well>
          </Col>
          <Col sm={4}>
            <Well bsSize="large" className="project_li_details_well">
              Current Tickets:
            </Well>
          </Col>
          <Col sm={4}>
            <Well bsSize="large" className="project_li_details_well">
              Time Remaining:
            </Well>
          </Col>
          </Row>
        </Well>
      </Row>
    </Well>
  </Row>
)

export default Projects_List_Item;

// stretch goal: progress bar