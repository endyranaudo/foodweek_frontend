import React, { Component } from 'react'
import './App.css';
import Dashboard from './components/Dashboard'
import ShoppingList from './components/ShoppingList'
import Signin from './components/Signin';
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile';
import RecipeSearch from './components/RecipeSearch'

import { withRouter, Route, Switch } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails';
// import { Link } from 'react-router-dom'

class App extends Component {

  state = {
    username: '',
    ingredients : []
  }

  signin = username => {
    this.setState({ username }) 
  }

  signout = () => {
    this.setState({ username: '' }) 
  }

  handleClickAdd = (ingredientName) => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredientName]
    })
  }

  render(){
    const { signin } = this
    const { username } = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/signin" render={props => {return(<Signin signin={signin} {...props} />)}}/>
          {/* <Route path="/signin" component={props => <Signin signin={signin} {...props} />}/> */}
          <Route exact path="/signup" render={props => {return(<SignUp />)}}/>
          <Route exact path="/dashboard" render={props => {return(<Dashboard username={username} />)}}/>
          <Route exact path="/search" render={props => {return(<RecipeSearch />)}}/>
          <Route exact path="/search/recipe/:id" render={props => {return(<RecipeDetails handleClickAdd={this.handleClickAdd}/>)}}/>
          <Route exact path="/list" render={props => {return(<ShoppingList items={this.state.ingredients} handleClickAdd={this.handleClickAdd} />)}}/>
          <Route exact path="/user" render={props => {return(<UserProfile />)}}/>
          {/* <Route component={() => <h1>PAGE NOT FOUND!<h1/>} /> */}
        </ Switch>
      </div>
    )
  }

}

export default withRouter(App);