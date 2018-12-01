import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Projects_List from './Projects_List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/projects',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Hello World!</h1>
      <Projects_List items={this.state.items}/>
    </div>)
  }
}

export default App;