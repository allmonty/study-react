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

  changeNameHandler = (event) => {
    let persons = this.state.persons
    persons[0].name = event.target.value
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroungColor: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>switch name</button>
        <Person
          click={this.switchNameHandler.bind(this, "David")}
          change={this.changeNameHandler}
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
