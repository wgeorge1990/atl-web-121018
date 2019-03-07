import React from 'react';
import logo from '../logo.svg';
import Store from '../store';

const message = () => {
  let count = Store.getState().count;
  if (count < 0) {
    return "The count is negative!"
  } else if (count < 10) {
    return "The count is less than ten."
  } else {
    return "The count is greater than ten!"
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    Store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{message()}</h3>
      </header>
    )
  }
}

export default Header;
