// STRETCH GOAL:

import React from 'react';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const Ticket = (props) => (
  <Row>
    <Col>
      <Well>
        <h4>{props.ticket.title}</h4>
        <Row>
          <p>Started: {String(props.ticket.createdAt)} </p>
          <p>Deadline: {String(props.ticket.deadline)}</p>
          <p>Task: {String(props.ticket.body)} </p>
          <p>Started: {String(props.ticket.createdAt)} </p>
          <a className="btn"> Complete </a>
          <a className="btn"> Edit </a>
          <a className="btn btn-delete"> Delete </a>
        </Row>
      </Well>
    </Col>
  </Row>
);

export default Ticket;