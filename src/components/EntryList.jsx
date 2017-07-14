import React, { Component } from 'react';
import Entry from './Entry';

class EntryList extends Component {
  render() {
    return (
      <div className="entrylist">
        {this.props.apiData.map((entry) => {
          if (this.props.currentlyEditing === entry.id) {
            return (
              <div className="editform" key={entry.id}>
                <form
                  onSubmit={e => this.props.editEntry(e, entry.id)}
                  className="edit"
                >
                  <input
                    type="text"
                    name="content"
                    value={this.props.contentValue}
                    onChange={this.props.handleContentInputChange}
                  />
                  <input
                    type="text"
                    name="author"
                    value={this.props.authorValue}
                    onChange={this.props.handleAuthorInputChange}
                  />
                  <input
                    type="text"
                    name="category"
                    value={this.props.categoryValue}
                    onChange={this.props.handleCategoryInputChange}
                  />
                  <input
                    type="text"
                    name="date"
                    value={this.props.dateValue}
                    onChange={this.props.handleDateInputChange}
                  />
                  <input
                    type="text"
                    name="time"
                    value={this.props.timeValue}
                    onChange={this.props.handleTimeInputChange}
                  />
                  <input type="submit" value="Done" />
                </form>
              </div>
            );
          }
          return (
            <Entry
              entry={entry}
              deleteEntry={this.props.deleteEntry}
              showEditForm={this.props.showEditForm}
              key={entry.id}
            />);
        })}
      </div>
    );
  }
}

export default EntryList;