import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}<li>Home</li>
            {/* <li><Link to="/entries">Journal Entries</Link></li>*/}<li>Journal Entries</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;