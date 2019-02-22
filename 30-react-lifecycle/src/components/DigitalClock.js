import React, { Component } from "react";

class DigitalClock extends Component {
  constructor() {
    super();
    this.state = { minutes: 0 };
    console.log(this.__proto__.constructor.name, "constructor");
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting");
    this.intervalId = setInterval(() => {
      this.setState({ minutes: this.state.minutes + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update");
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log(this.__proto__.constructor.name, "will unmount");
  }

  render() {
    return (
      <div className="app-children">
        <h2 id="digital">11:{this.state.minutes} AM</h2>
      </div>
    );
  }
}

export default DigitalClock;
