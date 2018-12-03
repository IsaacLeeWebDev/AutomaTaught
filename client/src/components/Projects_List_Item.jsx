import React from 'react';
import {
  Well, Col, Row,
} from 'react-bootstrap';

const Projects_List_Item = (props) => {
    return (
      <Row>
        <Well bsSize="large" className="project_li" onClick={() => props.changeView('Project_Dashboard', props.project._id)}>
          <Row>
            <Col smOffset={1}>
              <h3>{ props.project.title }</h3>
            </Col>
          </Row>
          <Row>
            <Well className="project_li_details">
              <Row>
              <Col sm={4}>
                <Well bsSize="large" className="project_li_details_well">
                  Total Tickets: {props.project.tickets.length}
                </Well>
              </Col>
              <Col sm={4}>
                <Well bsSize="large" className="project_li_details_well">
                  Current Ticket: {[props.project.tickets[0].title]}
                </Well>
              </Col>
              <Col sm={4}>
                <Well bsSize="large" className="project_li_details_well">
                  Deadline: {String(props.project.deadline)}
                </Well>
              </Col>
              </Row>
            </Well>
          </Row>
        </Well>
      </Row>
    );
}
export default Projects_List_Item;

/*
stretch goal:
  > progress bar, % Complete, Time remaining,

*/