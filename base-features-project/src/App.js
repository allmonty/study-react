import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Allan", age: 26 },
      { name: "Jo", age: 26 },
      { name: "Loma", age: 24 },
    ]
  }

  switchNameHandler = (newName) => {
    let persons = this.state.persons
    persons[0].name = newName
    persons[2].age = 25
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person
          click={this.switchNameHandler.bind(this, "David")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
          I am a programmer
        </Person>
        <Person
          click={() => this.switchNameHandler("Rex")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
