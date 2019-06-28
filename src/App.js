import React, { Component } from 'react'
import './App.css';
import Dashboard from './components/Dashboard'
import ShoppingList from './components/ShoppingList'
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import RecipeSearch from './components/RecipeSearch'

import { withRouter, Route, Switch } from 'react-router-dom'
// import { Link } from 'react-router-dom'

class App extends Component {

  render(){
  
    return (
      <div>
        <Switch>
          <Route exact path="/login" render={props => {return(<Login />)}}/>
          {/* <Route exact path="/signup" render={props => {return(<SignUp />)}}/> */}
          <Route exact path="/dashboard" render={props => {return(<Dashboard />)}}/>
          <Route exact path="/search" render={props => {return(<RecipeSearch />)}}/>
          <Route exact path="/list" render={props => {return(<ShoppingList />)}}/>
          <Route exact path="/user" render={props => {return(<UserProfile />)}}/>
        </ Switch>
      </div>
    )
  }

}

export default withRouter(App);