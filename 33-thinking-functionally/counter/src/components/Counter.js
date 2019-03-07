import React, { Component } from 'react';
import Store from '../store';

class Counter extends Component {

  constructor(props) {
    super(props);
    Store.subscribe(() => this.forceUpdate())
  }

  increment = (amount) => Store.dispatch({ type: 'INCREMENT', amount })
  decrement = (amount) => Store.dispatch({ type: 'DECREMENT', amount })

  render() {
    return (
      <div className="Counter">
        <h1>Count: {Store.getState().count}</h1>
        <button onClick={() => this.decrement(5) }> - 5</button>
        <button onClick={() => this.decrement(1)}> - 1</button>
        <button onClick={() => this.increment(1)}> + 1</button>
        <button onClick={() => this.increment(5)}> + 5</button>
      </div>
    )
  }
}

export default Counter;
