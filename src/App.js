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
    this.state={
      showForm: 'post',
      postSuccessMessage:'',
      postErrorMessage:'',
      putSuccessMessage:'',
      putErrorMessage:'',
      deleteErrorMessage:'',
      deleteSuccessMessage:''
    };
  }
  changeTabs = (tab)=> {
    this.setState({
      showForm:tab
    })
  };
  render() {
    return (
      <div className="App">
      <h1 className="app-header"> Movie Quotes! </h1>
      <NavBar onTabChange= {this.changeTabs} showForm={this.state.showForm}/>
        {this.state.showForm==='post' && <PostMovieQuoteForm/>}
      {this.state.showForm==='put' &&<PutMovieQuoteForm/> }
      {this.state.showForm==='delete' &&<DeleteMovieQuoteForm/>}
      </div>
    );
  }
}

export default App;
