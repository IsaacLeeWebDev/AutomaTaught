import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const testItemObj = {
  _id: 0,
  title: 'Test Project',
  description: 'A test MVP project for my MVP project',
  createdAt: new Date(),
  deadline: new Date(),
  tickets: [
    {
      id: 0,
      title: 'Do Chores',
      body: 'Clean all your dishes, and then put them away',
      createdAt: new Date(),
      completionState: false,
      ticketType: 'defaultTicket',
    },
    {
      id: 1,
      title: 'Have fun',
      body: 'Go out and meet some people, make some friends... or just do MVP all day up to you. But like, if you do that, I will think you\'re a weirdo... just putting that out there. I mean, life\'s not about programming. Like, even wierdo hippy emergence theorists have to get out of their fractal tetrahedral E8 Lattuce worship circles to take breaks for like... I dunno... Bacci ball probably',
      createdAt: new Date(),
      completionState: true,
      ticketType: 'defaultTicket',
    },
  ],
};

const List = (props) => (
  <div>
    <Row>
      <Col sm={5}>
        <h4>Your Projects ( {props.items.length } projects open) </h4>
      </Col>
      <Col sm={2} smOffset={3}>
        <Button bsStyle="success">Create a new project</Button>
      </Col>
    </Row>
    <Well>
      {
        props.items ?
          props.items.map(item => <Projects_List_Item item={item}/>) :
          <Projects_List_Item item={[]} />
      }
    </Well>
  </div>
)
export default List;

      // {
      //   /*props.items ?*/
      //     props.items.map(item => <Projects_List_Item item={item}/>) :
      //     /*<Projects_List_Item item={[]} />*/
      // }