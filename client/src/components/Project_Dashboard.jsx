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
    <Tickets_List tickets={props.currentProject.tickets} changeView={props.changeView} />
    <a className="btn btn-success" onClick={() => props.changeView('Ticket_Form')} >Create New Ticket</a>
  </Well>
);

export default Project_Dashboard;

/*
Stretch Goals: ----------------------------------------


> State: % Project Completion
  - T-shirt-size-points completed divided by T-shirt-size-points
  - Punctuality State: Good (5% or more ahead) , Keeping Up (5% to -0.5% ahead), Behind (less than -0.5% ahead)

> Break tickets into Blocked, Backlog, In Progress, Committed
  - This means you'll have four ticket lists where you have one.
  - This means Tickets_List needs a prop that contains which list it is.

> Display a "Current Ticket" which represents the In-Progress item with the
 soonest due date, or if none exists, the first In-Progress item with the
first

> New Ticket List: Stretch Goals.

> New component: Filter bar
  - Filter tickets on keypress

> Hotkeys:
  - Commit current ticket (shift + c + t)
  - Edit current ticket (shift + e + t)
  - Abandon current ticket (shift + a + t)
  - Backlog current ticket (shift + b + t)
  - Create new ticket (shift + c + t)
  - Create new stretch-goal ticket (shift + c + t)
*/