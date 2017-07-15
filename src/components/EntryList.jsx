import React, { Component } from 'react';
import Entry from './Entry';

class EntryList extends Component {
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
            currentlyEditing: entries_data.id,
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
      <div className="entrylist">
        {this.state.apiData.map((entry) => {
          if (this.state.currentlyEditing === entry.id) {
            return (
              <div className="editform" key={entry.id}>
                <form
                  onSubmit={e => this.state.editEntry(e, entry.id)}
                  className="edit"
                >
                  <input
                    type="text"
                    name="content"
                    value={this.state.contentValue}
                    onChange={this.state.handleContentInputChange}
                  />
                  <input
                    type="text"
                    name="author"
                    value={this.state.authorValue}
                    onChange={this.state.handleAuthorInputChange}
                  />
                  <input
                    type="text"
                    name="category"
                    value={this.state.categoryValue}
                    onChange={this.state.handleCategoryInputChange}
                  />
                  <input
                    type="text"
                    name="date"
                    value={this.state.dateValue}
                    onChange={this.state.handleDateInputChange}
                  />
                  <input
                    type="text"
                    name="time"
                    value={this.state.timeValue}
                    onChange={this.state.handleTimeInputChange}
                  />
                  <input type="submit" value="Done" />
                </form>
              </div>
            );
          }
          return (
            <Entry
              entry={entry}
              deleteEntry={this.state.deleteEntry}
              showEditForm={this.state.showEditForm}
              key={entry.id}
            />);
        })}
      </div>
    );
  }
}
export default EntryList;