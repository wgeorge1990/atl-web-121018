import React, { Component } from "react";

class StockTicker extends Component {
  constructor() {
    super();
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update");
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount");
  }

  render() {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div>54</div>
        </div>
      </div>
    );
  }
}

export default StockTicker;
