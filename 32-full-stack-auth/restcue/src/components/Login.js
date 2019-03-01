import React, { Component } from 'react';
import { getAuthToken } from '../services/Backend';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    getAuthToken(this.state).then(payload => {
      localStorage.setItem("token", payload.token)
      // We have access to the history prop because this component
      // was rendered by a Route from react-router. We use push to
      // redirect the user to the homepage after logging in.
      this.props.history.push("/")
    })
  }

  render() {
    return (
      <form class="ui form" onSubmit={this.handleSubmit}>
        <div class="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
    )
  }

}

export default Login;
