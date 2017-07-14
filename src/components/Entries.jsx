import React, { Component } from 'react';
import Nav from './Nav.jsx';
import EntryList from './EntryList.jsx'
import Footer from './Footer.jsx';

class Index extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <EntryList/>
        <Footer/>
      </div>
    );
  }
}

export default Index;
