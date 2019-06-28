import React, { Component } from 'react'
import './App.css';
// import Login from './components/Login'
import NavBar from './NavBar'
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import UserProfile from './components/UserProfile';
// import api from './api'
// import { Route, Switch } from 'react-router-dom'
// import { Link } from 'react-router-dom'

class App extends Component {

  render(){
  
    return (
      <div>
        < NavBar />
        <Dashboard />
        {/* <Login /> */}
        {/* <UserProfile /> */}
      </div>
    )
  }

}

export default App;