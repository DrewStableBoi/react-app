import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const key = event.target.className;
    const value = event.target.value;

    this.setState({ [key]: value })
  }

  handleClick(event){
    const username = this.state.username;
    const password = this.state.password;

    if (!username) {
      return alert('please enter a username')
    }

    if (password.length < 8) {
      return alert('password must be at least 8 characters')
    }

    console.log('login success!!!')
  }

  render(){
    return (
      <div className="login-modal">
        <input value={this.state.username} onChange={this.handleInputChange} className="username" type="text" placeholder="username"/>
        <input value={this.state.password} onChange={this.handleInputChange} className="password" type="password" placeholder="password"/>
        <div className="submit" onClick={this.handleClick}>
          <span>Login</span>
        </div>
      </div>
    )
  }
}

function App() {
  return (
  <div className="wrapper">
    <Login />
  </div>
  );
}

export default App;