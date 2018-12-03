// Packages
import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';
// Components
import Tickets_List from './Tickets_List.jsx';


const Project_Dashboard = (props) => (
  <Well className="project_dashboard">
    Hello From Project Dashboard!
    <Row>
      <Well>
        <h3>{props.currentProject.title}</h3>
        <h4> ( Due at: {String(props.currentProject.deadline)} )</h4>
      </Well>
    </Row>
    <Row>
      <p>{props.currentProject.description}</p>
    </Row>
    <Tickets_List tickets={props.currentProject.tickets} />
  </Well>
);

export default Project_Dashboard;

