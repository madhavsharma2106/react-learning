import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Madhav', age: 28 },
      { name: 'Ram', age: 26 },
      { name: 'Shrey', age: 33 },
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "Madhav Sharma"; DONT DO THIS
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Ram', age: 262 },
        { name: 'Shrey', age: 33 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "newName", age: 28 },
        { name: event.target.value, age: 262 },
        { name: 'Shrey', age: 33 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    return (
      <div className="App">
        <h1> Hi Im a React App </h1>
        <button onClick={this.togglePersonsHandler}>Change Person</button>
        {
          this.state.showPersons === true ?
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Chetan")}
            change={this.nameChangedHandler}
          >
            My Hobbies are: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
