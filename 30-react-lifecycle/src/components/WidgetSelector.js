import React, { Component } from "react";

class WidgetSelector extends Component {
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
  render() {
    return (
      <div className="app-children">
        <p>{this.props.which}</p>
        <button onClick={() => this.props.toggle("clocks")}>Clocks</button>
        <button onClick={() => this.props.toggle("stocks")}>Stocks</button>
      </div>
    );
  }
}

export default WidgetSelector;
