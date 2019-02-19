import React, { Component } from 'react';
import Navbar from './presentational/Navbar';
import FuzzyAnimalCollection from './container/FuzzyAnimalCollection'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <FuzzyAnimalCollection />
      </div>
    );
  }
}

export default App;
