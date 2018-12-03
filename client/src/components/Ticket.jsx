// STRETCH GOAL:

import React from 'react';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const Ticket = (props) => (
  <Row>
    <h4>{props.ticket.title}</h4>
    <Row>
      <p>Started: {String(props.ticket.createdAt)} </p>
      <p>Started: {String(props.ticket.createdAt)} </p>
      <p>Started: {String(props.ticket.createdAt)} </p>
    </Row>
  </Row>
);

export default Ticket;