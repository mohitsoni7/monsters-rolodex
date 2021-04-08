import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  /* Life Cycle Methods

  These are those methods which gets called at different stages when
  the components get rendered.

  for ex. starting with component i.e. componentDidMount

  */
  componentDidMount() {
    {
      this.setState({
        monsters: [
          {
            'name': 'Thanos',
            'id': '001'
          },
          {
            'name': 'Magneto',
            'id': '002'
          }
        ]
      })
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.monsters.map(
          (monster) => <h1>{monster.name}</h1>
        )}
      </div>
    )
  }
}

export default App;
