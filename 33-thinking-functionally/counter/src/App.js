import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

import Store from './store';

console.log(Store);
console.log(Store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
