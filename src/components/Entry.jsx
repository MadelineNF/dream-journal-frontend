import React, { Component } from 'react';

class Entry extends Component {
  constructor() {
      super();
      this.state = {
        apiData: null,
        apiDataLoaded: false,
        currentlyEditing: null,
        currentlyAdding: false,
        /* inputs */
        contentValue: '',
        authorValue: '',
        categoryValue: '',
        dateValue: '',
        timeValue: '',

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
            currentlyEditing: id,
            contentValue: jsonRes.entries_data.content,
            authorValue: jsonRes.entries_data.author,
            categoryValue: jsonRes.entries_data.category,
            dateValue: jsonRes.entries_data.date,
            timeValue: jsonRes.entries_data.time,
            currentlyAdding: false,
          });
          console.log(this.state.apiData)
          console.log(this.state)
        }).catch(err => console.log(err));
    }
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
