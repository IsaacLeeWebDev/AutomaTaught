import React from 'react';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';
import Ticket from './Ticket.jsx';

const Tickets_List = props => {
  const ticketsJSX = [];
  for (let i = 0; i < props.tickets.length; i++) {
    ticketsJSX.push((<Ticket ticket={props.tickets[i]} changeView={props.changeView} />));
  }
  return (
    <Row>
      <Col smOffset={2}>
        <h3> Tickets to complete: {props.tickets.length} </h3>
        {ticketsJSX}
      </Col>
    </Row>
    );
}

export default Tickets_List;