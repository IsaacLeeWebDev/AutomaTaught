import React from 'react';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';
import Ticket from './Ticket.jsx';

const Tickets_List = (props) => {
  const ticketsJSX = [];
  for (let i = 0; i < props.tickets.length; i++) {
    ticketsJSX.push((<Ticket ticket={props.tickets[i]} />));
  }
  return (
    <Row>
      <h3> Tickets to complete: </h3>
      {ticketsJSX}
    </Row>
    );
}

export default Tickets_List;