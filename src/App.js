import React, { Component } from 'react';

import Calendar from './components/Calendar/Calendar.js';
import Navbar from './components/Navbar/Navbar.js';

import './scss/index.scss';

export default class App extends Component {
  render() {
    return (
    	<div>
        <Navbar></Navbar>
        {this.props.children}
    	</div>
    );
  }
}
