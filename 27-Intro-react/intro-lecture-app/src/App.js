import React, { Component } from 'react';
import Navbar from './presentational/Navbar';
import FuzzyAnimal from './presentational/FuzzyAnimal'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <FuzzyAnimal />
      </div>
    );
  }
}

export default App;
