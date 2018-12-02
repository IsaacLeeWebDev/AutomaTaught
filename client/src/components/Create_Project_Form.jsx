import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader
} from 'react-bootstrap';

import CP_Form_1 from './CP_Form_1.jsx';
import CP_Form_2 from './CP_Form_1.jsx';
import CP_Form_3 from './CP_Form_1.jsx';

class Create_Project_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
    }
  }

  changeView() {
    if (view === 0) {

    }
  }

};

export default Create_Project_Form;

// stretch goal: Form validation
// stretch goal: Personalized look