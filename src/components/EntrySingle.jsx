import React, { Component } from 'react';

class EntrySingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      entryId: props.match.params.id,
      entry: null,
      entryDataReceived: false,
    }
  }
  componentDidMount() {
    fetch(`https://intelligent-croissant-85314.herokuapp.com/entries/${this.state.entryId}`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          entry: jsonRes.quote,
          entryDataReceived: true,
        });
        console.log(this.state.entry)
      });
  }
    renderEntry(){
      if(this.state.entryDataReceived){
        return(
          <div>
            <div>
              <h3>{this.state.entry.date}</h3>
              <h3>{this.state.entry.time}</h3>
              <h3>{this.state.entry.author}</h3>
              <h3>{this.state.entry.category}</h3>
            </div>
            <div>
              <p>{this.state.entry.content}</p>
            </div>
          </div>
        );
      }else{
        return(
          <div>Loading</div>
        )
      }
    }
  render() {
    return (
      <div>
        {this.renderEntry()}
      </div>
    );
  }
}

export default EntrySingle;