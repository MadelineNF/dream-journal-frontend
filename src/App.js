import React, { Component } from 'react';
import './App.css';
import Index from './components/Index.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' component={Index}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
