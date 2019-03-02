import React, { Component } from 'react';
import Router from './Router';
import { NavLink } from 'react-router-dom'
import './app.css'

const Navigation = (props) => 
<nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render () {

    return (
      <div className="page-container">
        <h1>Online Toy Store</h1>
        <Navigation />
        <Router />
      </div>
    )
  }
}

export default App;