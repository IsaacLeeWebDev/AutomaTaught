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
      items: projects
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/projects',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
    <Grid>
      <PageHeader>Welcome to MVPro!</PageHeader>
      <Projects_List items={this.state.items}/>
    </Grid>)
  }
}

export default App

// stretch goal: Timers on everything.