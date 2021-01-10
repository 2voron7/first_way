import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState ({username: event.target.value})
  }

  render () {
    return (
      <div className="App">
        <o1>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs </li>
        </o1>
        <UserInput 
          changed = {this.usernameChangedHandler}
          currentName = {this.state.username} />
        <UserOutput 
          userName = {this.state.username} />
        <UserOutput 
          userName = {this.state.username} />
        <UserOutput 
          userName = "Max" />
      </div>
    )
  }
}

export default App;