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
import { validate, defaultOptions, defaultHeaders } from './services/api'

const baseURL = "http://localhost:3000"
const usersURL = `${baseURL}/users`
const userIngredientsURL = `${baseURL}/user_ingredients`
// const ingredientsURL = `${baseURL}/ingredients`
const usersingredientsURL = `${baseURL}/user/ingredients`


class App extends Component {

  state = {
    username: '',
    picture_url: '',
    ingredients : [],
    // schedules: []
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

  // SIGNIN & SIGNOUT ########

  signin = (user) => {
    this.setState({ user_id: user.id, username: user.username, picture_url: user.picture_url }) 
    this.props.history.push('/dashboard')
    localStorage.setItem('token', user.token)
    fetch(usersingredientsURL, defaultOptions())
      .then(resp => resp.json())
      .then( users_ingredients => this.setState({ingredients: users_ingredients}))
  }

  signout = () => {
    this.setState({ username: '' }) 
    // this.props.history.push('/signin')
    localStorage.removeItem('token')
  }


  // SIGNUP ########

  signup = (event, user) => {
    event.preventDefault()
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password
    }
    this.createNewUserBackend(newUser)
    .then(user => this.signin(user))
  }

  createNewUserBackend = user => {
    return fetch(usersURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
  }


  // ADD ITEMS TO LIST

  addItemToList = ingredientName => {
    let foundIngredient = this.state.ingredients.find(i => i.name.toLowerCase() === ingredientName.toLowerCase())

    if (!foundIngredient) {
      console.log('INGREDIENT')
      const newListItem = {
        user_id: this.state.user_id,
        ingredient_name: ingredientName
      }
      this.createShoppingListItemBackend(newListItem)
      .then(newIngredient => {
        this.setState({ ingredients: [...this.state.ingredients, newIngredient] })
      })
    }
  }


  createShoppingListItemBackend = item => {
    console.log(item)
    return fetch(userIngredientsURL, {
      method: 'POST',
      headers: defaultHeaders({'Content-Type': 'application/json'}),
      body: JSON.stringify(item)
    })
    .then(resp => resp.json())
  }

  findCurrentUser = username => {
    return fetch(usersURL)
    .then(resp => resp.json())
    .then(users => users.find(u => 
      u.username === username
    ))
  }


  // FETCH INGREDIENTS from Backend

  // REMOVE ITEMS FROM LIST





  // INGREDIENTS ########

  handleClickAdd = (ingredientName) => {
    this.addItemToList(ingredientName)
  }

  // ###################

  render(){
    const { signin, signout } = this
    const { username, picture_url } = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/" render={props => {return(<Signin {...props} signin={signin} />)}}/>
          <Route exact path="/signin" render={props => {return(<Signin {...props} signin={signin} />)}}/>
          {/* <Route path="/signin" component={props => <Signin signin={signin} {...props} />}/> */}
          <Route exact path="/signup" render={props => {return(<SignUp {...props} signup={this.signup} />)}}/>
          <Route exact path="/dashboard" render={props => {return(<Dashboard {...props} username={username} signout={signout} />)}}/>
          <Route exact path="/search" render={props => {return(<RecipeSearch {...props} username={username} signout={signout} />)}}/>
          <Route exact path="/search/recipe/:id" render={props => {return(<RecipeDetails {...props} username={username} signout={signout} handleClickAdd={this.handleClickAdd} />)}}/>
          <Route exact path="/list" render={props => {return(<ShoppingList {...props} username={username} signout={signout} items={this.state.ingredients} handleClickAdd={this.handleClickAdd} />)}}/>
          <Route exact path="/user" render={props => {return(<UserProfile {...props} username={username} picture_url={picture_url} signout={signout} />)}}/>
          {/* <Route component={() => <h1>PAGE NOT FOUND!<h1/>} /> */}
        </ Switch>
      </div>
    )
  }

}

export default withRouter(App);