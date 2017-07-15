import React, { Component } from 'react';
import EntryList from './EntryList.jsx'


class Entries extends Component {
  constructor(props) {
      super(props);
      this.state = {
        apiData: this.props.apiData,
        apiDataLoaded: false,
      };
    }

    render() {
      return (
        <div>
          {this.props.apiData ? this.props.apiData.map((entry)=>
          <div key={entry.id}><EntryList apiData={this.props.apiData}/></div>) : <div>Loading</div>}
        </div>
      );
    }
  }
export default Entries;