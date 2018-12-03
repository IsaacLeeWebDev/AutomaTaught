import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Projects_List from './Projects_List.jsx';
import {
  Grid, Row, Col, PageHeader
} from 'react-bootstrap';
import projects from '../../../testProjects.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: projects,
      view: 'Projects_List'
    }
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/projects',
      success: (data) => {
        this.setState({
          items: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  changeView(viewNameString) {
    if(viewNameString === 'Projects_List') {
      this.setState('Projects_List');
    } else if (viewNameString === 'Project_Dashboard') {
      this.setState('Project_Dashboard');
    } else if (viewNameString === 'Create_Project_Form') {
      this.setState('Create_Project_Form');
    }
  }

  renderView() {

  }

  render () {
    return (
      <Grid>
        <PageHeader>Welcome to MVPro!</PageHeader>
        <Projects_List items={this.state.items}/>
      </Grid>
    )
  }
}

export default App;

// stretch goals:
// Timers on everything.
// Start working button
  // Break reminders
  // Commit reminders
// animations from All projects to project dashboard