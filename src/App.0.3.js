import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          'name': 'Frankenstein',
          'id': 'monster001'
        },
        {
          'name': 'Dracula',
          'id': 'monster002'
        },
        {
          'name': 'Zombie',
          'id': 'monster003'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)}
        </header>
      </div>
    )
  }
}

export default App;
