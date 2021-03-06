import React, { Component } from 'react';
  import './App.css';
  import Nav from './components/Nav.jsx';
  import Footer from './components/Footer.jsx';
  import Index from './components/Index.jsx';
  import Entries from './components/Entries.jsx';
  import EntrySingle from './components/EntrySingle.jsx';
  import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';


  class App extends Component {
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
    

    
    /* CRUD functionality */
    this.addEntry = this.addEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    /* handles form changes */
    this.handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
    this.handleContentInputChange = this.handleContentInputChange.bind(this);
    this.handleAuthorInputChange = this.handleAuthorInputChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleTimeInputChange = this.handleTimeInputChange.bind(this);
  }
      componentDidMount () {
      fetch('https://intelligent-croissant-85314.herokuapp.com/entries', {
        method: 'GET',
      }).then(res => res.json()).then((jsonRes) => {
          this.setState({
            apiData: jsonRes.entries_data,
            apiDataLoaded: true,
          });
        }).catch(err => console.log(err));
    }

/* shows/hides edit form for individual quote */
  showEditForm(id) {
    fetch(`https://intelligent-croissant-85314.herokuapp.com/entries/${id}`).then(res => res.json()).then((jsonRes) => {
      this.setState({
        currentlyEditing: id,
        contentValue: jsonRes.entries_data.content,
        authorValue: jsonRes.entries_data.author,
        categoryValue: jsonRes.entries_data.category,
        dateValue: jsonRes.entries_data.date,
        timeValue: jsonRes.entries_data.time,
        currentlyAdding: false,
      });
    }).catch(err => console.log(err));
  }

  showAddForm() {
    this.setState({
      currentlyEditing: null,
      currentlyAdding: true,
    });
  }

   /* ================ ENTRY CRUD =============== */
  addEntry(e) {
    e.preventDefault();
    fetch('https://intelligent-croissant-85314.herokuapp.com/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entry: {
          content: this.state.contentValue,
          author: this.state.authorValue,
          category: this.state.categoryValue,
          date: this.state.dateValue,
          time: this.state.timeValue,
        },
      }),
    }).then(res => res.json()).then((jsonRes) => {
      this.setState({
        apiData: jsonRes.entries_data,
        currentlyAdding: false,
        contentValue: '',
        authorValue: '',
        categoryValue: '',
        dateValue: '',
        timeValue: '',
      });
    }).catch(err => console.log(err));
  }

  editEntry(e, id) {
    e.preventDefault();
    fetch(`https://intelligent-croissant-85314.herokuapp.com/entries/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entry: {
          content: this.state.contentValue,
          author: this.state.authorValue,
          category: this.state.categoryValue,
          date: this.state.dateValue,
          time: this.state.timeValue,
        },
      }),
    }).then(res => res.json()).then((jsonRes) => {
      this.setState({
        apiData: jsonRes.entries_data,
        currentlyEditing: null,
        contentValue: '',
        authorValue: '',
        categoryValue: '',
        dateValue: '',
        timeValue: '',
      });
    }).catch(err => console.log(err));
  }

  deleteEntry(id) {
    fetch(`https://intelligent-croissant-85314.herokuapp.com/entries/${id}`, {
      method: 'DELETE',
    }).then(res => res.json()).then((jsonRes) => {
      this.setState({
        apiData: jsonRes.entries_data,
      });
    }).catch(err => console.log(err));
  }


  /* ======== FORM CONTROLS */

  handleContentInputChange(event) {
    this.setState({ contentValue: event.target.value });
  }

  handleAuthorInputChange(event) {
    this.setState({ authorValue: event.target.value });
  }

  handleCategoryInputChange(event) {
    this.setState({ categoryValue: event.target.value });
  }

  handleDateInputChange(event) {
    this.setState({ dateValue: event.target.value });
  }

  handleTimeInputChange(event) {
    this.setState({ timeValue: event.target.value });
  }
    render() {
      return (
        <Router>
          <div className="App">
            <Nav />
            <switch>
              <Route exact path='/' render={()=><Index />} />
              <Route path='/entries' render={()=><Entries apiData={this.state.apiData}/>} />
              <Route path='/entry/:id' Component={EntrySingle} />
            </switch>
            <Footer />
          </div>
        </Router>
        
      );
    }
  }


  export default App;
