import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Entry extends Component {
  render() {
    return (
      <div>
        <div className="entry">
          <div className="meta">
            <span className="date">date:{this.props.entry.date} </span> 
            <span className="time">time:{this.props.entry.time} </span> 
            <span className="author">author:{this.props.entry.author} </span> 
            <span className="category">category:{this.props.entry.category}</span>
            <Link to= {`/entry/${this.props.entry.id}`}>
              View Quote
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Entry;
