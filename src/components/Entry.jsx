import React, { Component } from 'react';

class Entry extends Component {
  render() {
    return (
      <div>
        <div className="entry">
          <div className="meta">
            <span className="date">{this.props.entry.date}</span>
            <span className="time">{this.props.entry.time}</span>
            <span className="author">{this.props.entry.author}</span>
            <span className="category">{this.props.entry.category}</span>
          </div>
          <h3>{this.props.entry.content}</h3>
          <div className="edit-delete">
            <span
              role="button"
              tabIndex={(parseInt(this.props.entry.id, 10) * 3) + 1}
              className="delete"
              onClick={() => this.props.deletEentry(this.props.entry.id)}
            >Delete</span>
            <span
              role="button"
              tabIndex={(parseInt(this.props.entry.id, 10) * 3) + 2}
              className="edit"
              onClick={() => this.props.showEditForm(this.props.entry.id)}
            >Edit</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
