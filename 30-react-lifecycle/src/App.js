import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <p> I'm the form </p>
        {this.props.children}
      </form>
    );
  }
}

class Button extends Component {
  render() {
    return <button>I'm the button</button>;
  }
}

class App extends Component {
  render() {
    return (
      <div id="app">
        <Form>
          <Button />
        </Form>
      </div>
    );
  }
}

export default App;

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
