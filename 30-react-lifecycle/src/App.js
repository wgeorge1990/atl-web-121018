import React, { Component } from "react";
// import RandomKoala from "./components/RandomKoala";
import WidgetSelector from "./components/WidgetSelector";
import DigitalClock from "./components/DigitalClock";
import StockTicker from "./components/StockTicker";

class Form extends Component {
  constructor(props) {
    super(props);
    console.log("form constructed");
  }

  render() {
    console.log("form rendered");
    return (
      <form>
        <p> I'm the form </p>
        {this.props.children}
      </form>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    console.log("button constructed");
  }

  render() {
    console.log("button rendered");
    return <button>I'm the button</button>;
  }
}

class App extends Component {
  constructor(props) {
    console.log("constructed app");
    super(props);
    this.state = { which: "clocks" };
  }

  toggle = which => {
    this.setState({ which: which });
  };

  render() {
    console.log("app rendered");
    return (
      <div id="app">
        {this.state.which === "clocks" ? <DigitalClock /> : <StockTicker />}
        <WidgetSelector which={this.state.which} toggle={this.toggle} />
      </div>
    );
  }
}

// console.log("js loaded");
export default App;

// {this.state.koalas.length > 0 ? (
//   <RandomKoala koala={this.state.koalas[0]} />
// ) : (
//   <div>Loading your koalas, be right with you with koalas</div>
// )}

// componentDidMount() {
//   console.log("app did mount");
//   fetch(`http://localhost:3000/koalas`)
//     .then(res => res.json())
//     .then(koalas => {
//       this.setState({ koalas: koalas });
//     });
// }

// constructor() {
//   super()
//   console.log(this.__proto__.constructor.name, "constructor")
// }
//
// componentDidMount() {
//   console.log(this.__proto__.constructor.name, "mounting")
// }
//
// componentDidUpdate() {
//     console.log(this.__proto__.constructor.name, "did update")
// }
