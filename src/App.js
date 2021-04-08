import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    // Bind the this with custom function
    // this.handleChange = this.handleChange.bind(this);
  }

  /* Life Cycle Methods

  These are those methods which gets called at different stages when
  the components get rendered.

  for ex. starting with component i.e. componentDidMount

  */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ monsters: users }) })
  }

  // Create Custom function and bind it with class
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // Otherwise create an arrow function which automatically binds it to the place where it is defined
  handleChange = (e) => { this.setState({ searchField: e.target.value }) };


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField)
    );



    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* Search Box */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        // handleChange={e => this.setState({ searchField: e.target.value })}
        />


        {/*
        Our Component should be responsible of 
        doing all the things what is supposed to do.

        for ex.
        App Component shouldn't display cards
        card-list Component should display just cards
        Card Component should display card information
        */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
