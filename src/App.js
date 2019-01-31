import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PostMovieQuoteForm from './components/PostMovieQuoteForm';
import PutMovieQuoteForm from './components/PutMovieQuoteForm';
import DeleteMovieQuoteForm from './components/DeleteMovieQuoteForm';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
      <h1> Movie Quotes! </h1>
      <NavBar/>
        <PostMovieQuoteForm/>
        <PutMovieQuoteForm/>
        <DeleteMovieQuoteForm/>
      </div>
    );
  }
}

export default App;
