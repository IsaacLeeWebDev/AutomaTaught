import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const testItemObj = {
  id: 0,

}

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
      { props.items.map(item => <Projects_List_Item item={item}/>) }
    </Well>
  </div>
)
export default List;

      // {
      //   /*props.items ?*/
      //     props.items.map(item => <Projects_List_Item item={item}/>) :
      //     /*<Projects_List_Item item={[]} />*/
      // }