import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/entries">Journal Entries</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;