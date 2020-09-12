import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchEntry: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersFetched => console.log('Users Fetched from https://jsonplaceholder.typicode.com/users:') | 
                          console.log(usersFetched) | 
                          this.setState({users: usersFetched}))
    .catch('Error with fetching users list !')
  }

  handleSearchBoxChange = (e) => {
    this.setState( {searchEntry: e.target.value}, () => console.log(this.state) );
  }

  render() {

    const { users, searchEntry } = this.state;
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchEntry.toLowerCase())
      );

    return (
      <div className="App">
      
        <header className="App-header">
          <button onClick={() => this.setState({userName: 'Robot'})}>Login</button>
          <p>Welcome { this.state.userName } !</p>

          <img src={logo} className="App-logo" alt="logo" />
          <h1>ROBOTERS</h1>

        </header>

        {
        // <input 
        //   type='search' 
        //   placeholder='Search Users'
        //   onChange={ e => {
        //     this.setState( {searchEntry: e.target.value}, () => console.log(this.state) );
        //   }}
        // />
        }
        {
        <SearchBox
          placeHolder='Search Robots'
          handleChange={this.handleSearchBoxChange}
        />
        }

        <CardList users={filteredUsers}/>
        
      </div>
    );
  }
}

export default App;
