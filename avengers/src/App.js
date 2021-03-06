import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom"; 

import Home from './Components/Home';
import AvengersList from './Components/AvengersList';
import AvengerPage from './Components/AvengerPage';

import avengers from './data';

import './App.css';
import AvengersPage from './Components/AvengerPage';

class App extends Component {

  constructor(){
    super();
    this.state={
      avengers: avengers
    }
  }
  render() {
    const {avengers} = this.state;
    return (
      <div className="App">
        <ul className="navbar">
          <li><NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink></li>
          <li><NavLink to="/avengers" activeClassName="activeNavButton">Avengers</NavLink></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/avengers" render={props => <AvengersList {...props} avengers={avengers} />} />
        <Route path="/avengers/:id" render={props => <AvengersPage {...props} avengers={avengers} />}  />
      </div>
    );
  }
}

export default App;
