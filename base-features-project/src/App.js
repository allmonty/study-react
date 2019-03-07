import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Allan" age="26">I am a programmer</Person>
        <Person name="Jo" age="26" />
        <Person name="Loma" age="24" />
      </div>
    );
  }
}

export default App;
