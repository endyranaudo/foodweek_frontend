import React, { Component } from 'react'

import './App.css';

import Dashboard from './components/Dashboard'
import ShoppingList from './components/ShoppingList'
import Signin from './components/Signin';
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile';
import RecipeSearch from './components/RecipeSearch'
import RecipeDetails from './components/RecipeDetails';

import { withRouter, Route, Switch } from 'react-router-dom'
import { validate } from './api'
// import { Link } from 'react-router-dom'

class App extends Component {

  state = {
    username: '',
    ingredients : []
  }

  componentDidMount () {
    if(localStorage.token) {
      validate()
        .then( data => {
          if (data.error){
            alert(data.error)
          } else {
            this.signin(data)
          }
        })
    }
  }

  signin = (user) => {
    this.setState({ username: user.username }) 
    this.props.history.push('/dashboard')
    localStorage.setItem('token', user.token)
  }

  signout = () => {
    this.setState({ username: '' }) 
    // this.props.history.push('/signin')
    localStorage.removeItem('token')
  }

  handleClickAdd = (ingredientName) => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredientName]
    })
  }

  render(){
    const { signin, signout } = this
    const { username } = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/signin" render={props => {return(<Signin signin={signin} {...props} />)}}/>
          {/* <Route path="/signin" component={props => <Signin signin={signin} {...props} />}/> */}
          <Route exact path="/signup" render={props => {return(<SignUp />)}}/>
          <Route exact path="/dashboard" render={props => {return(<Dashboard username={username} signout={signout}  />)}}/>
          <Route exact path="/search" render={props => {return(<RecipeSearch signout={signout}/>)}}/>
          <Route exact path="/search/recipe/:id" render={props => {return(<RecipeDetails {...props} handleClickAdd={this.handleClickAdd} signout={signout}/>)}}/>
          <Route exact path="/list" render={props => {return(<ShoppingList items={this.state.ingredients} handleClickAdd={this.handleClickAdd} signout={signout} />)}}/>
          <Route exact path="/user" render={props => {return(<UserProfile signout={signout} {...props}/>)}}/>
          {/* <Route component={() => <h1>PAGE NOT FOUND!<h1/>} /> */}
        </ Switch>
      </div>
    )
  }

}

export default withRouter(App);