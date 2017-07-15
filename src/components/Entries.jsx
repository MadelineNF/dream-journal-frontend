import React, { Component } from 'react';
import Nav from './Nav.jsx';
import EntryList from './EntryList.jsx'
import Footer from './Footer.jsx';

class Entries extends Component {
  constructor() {
      super();
      this.state = {
        apiData: null,
        apiDataLoaded: false,
      };
    }
    componentDidMount () {
      fetch('https://intelligent-croissant-85314.herokuapp.com/entries', {
        method: 'GET',
      }).then(res => res.json()).then((jsonRes) => {
          console.log('trying to set state')
          this.setState({
            apiData: jsonRes.entries_data,
            apiDataLoaded: true,
          });
          console.log(this.state.apiData)
          console.log(this.state)
        }).catch(err => console.log(err));
    }
    render() {
      return (
        <div>
          <Nav/>
          <EntryList apiData={this.state.apiData}/>
          <Footer/>
        </div>
      );
    }
  }
export default Entries;
