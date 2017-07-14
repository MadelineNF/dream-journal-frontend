import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

class Index extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="landing">
          <h1>Dream Journal</h1>
        </div>
      </div>
    );
  }
}

export default Index;
