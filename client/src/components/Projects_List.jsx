import React from 'react';
import Projects_List_Item from './Projects_List_Item.jsx';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

const Projects_List = (props) => (
  <div>
    <Well bsSize="large">
      { props.projects.map(project => <Projects_List_Item key={project._id} project={project} changeView={props.changeView}/>) }
    </Well>
  </div>
);

export default Projects_List;

