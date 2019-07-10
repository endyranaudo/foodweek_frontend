import React, { Component } from 'react'

import './App.css';

import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
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
const ingredientsURL = `${baseURL}/ingredients`
const usersingredientsURL = `${baseURL}/user/ingredients`

const emptySchedule = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
].map(dayName => ({
  name: dayName,
  meals: [
    {
      name: "Lunch",
      recipe: null
    },
    {
      name: "Dinner",
      recipe: null
    }
  ]
}))

class App extends Component {

  state = {
    user_id: null,
    username: '',
    picture_url: '',
    ingredients : [],
    schedule: localStorage.schedule ? JSON.parse(localStorage.schedule) : [...emptySchedule]
  }

  addRecipe = (recipe, dayName, mealName) => {
    this.setState({
      schedule: this.state.schedule.map(day => {
        if (day.name !== dayName) return day;
        day.meals = day.meals.map(meal => {
          if (meal.name !== mealName) return meal;
          meal.recipe = recipe
          return meal;
        })
        return day;
      })
    }, () => {
      localStorage.setItem('schedule', JSON.stringify(this.state.schedule))
    })
  }

  componentDidMount () {
    if(localStorage.token) {
      // debugger
      validate()
        .then( data => {
          if (data.error){
            // (data.error)
          } else {
            this.signin(data)
          }
        })
    }
  }

  // componentDidUpdate () {
  //   if(localStorage.token) {
  //     validate()
  //       .then( data => {
  //         if (data.error){
  //           alert(data.error)
  //         } else {
  //           this.signin(data)
  //         }
  //       })
  //   }
  // }

  // SIGNIN & SIGNOUT ########

  signin = (user) => {
    console.log(user)
    this.setState({ user_id: user.id, username: user.username, picture_url: user.picture_url }) 
    this.props.history.push('/dashboard')
    localStorage.setItem('token', user.token)
    fetch(usersingredientsURL, defaultOptions())
      .then(resp => resp.json())
      .then( users_ingredients => this.setState({ingredients: users_ingredients}))
  }

  signout = () => {
    this.setState({ username: '', schedule: [...emptySchedule] }) 
    // this.props.history.push('/signin')
    localStorage.removeItem('token')
    localStorage.removeItem('schedule')
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
    // console.log(item)
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


  // REMOVE ITEMS FROM LIST

  removeItemFromList = ingredient => {
    const remainingItems = this.state.ingredients.filter(i => i.id !== ingredient.id)
    setTimeout(() => this.setState({ ingredients: remainingItems }), 500);
    
    this.findCurrentUser(this.state.username)
      .then(user => {
        // debugger
        const ret = fetch(usersingredientsURL, defaultOptions())
        .then(resp => resp.json())
        .then(items => {
          // debugger
          const itemToDelete = items.find(i => i.id === ingredient.id)
          this.removeIngredientsBackend(itemToDelete)
        })
        return ret
      })
    }

  removeIngredientsBackend = item => {
    fetch(`${ingredientsURL}/${item.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())

  }


  // INGREDIENTS ########

  handleClickAdd = (ingredientName) => {
    this.addItemToList(ingredientName)
  }

  // ###################

  render(){
    const { signout, addRecipe } = this
    const { username, picture_url, schedule } = this.state
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" render={props => {return(<Landing {...props} />)}}/> */}
          {/* <Route exact path="/signin" render={props => {return(<Signin {...props} signin={this.signin} />)}}/> */}
          {/* <Route path="/signin" component={props => <Signin signin={signin} {...props} />}/> */}
          {/* <Route exact path="/signup" render={props => {return(<SignUp {...props} signup={this.signup} />)}}/> */}
          <Route exact path="/dashboard" render={props => {return(<Dashboard {...props} username={username} signout={signout} schedule={schedule}/>)}}/>
          <Route exact path="/search" render={props => {return(<RecipeSearch {...props} username={username} signout={signout} addRecipe={addRecipe} schedule={schedule}/>)}}/>
          <Route exact path="/search/recipe/:id" render={props => {return(<RecipeDetails {...props} username={username} signout={signout} handleClickAdd={this.handleClickAdd} />)}}/>
          <Route exact path="/list" render={props => {return(<ShoppingList {...props} username={username} signout={signout} items={this.state.ingredients} removeItem={this.removeItemFromList} handleClickAdd={this.handleClickAdd} />)}}/>
          <Route exact path="/user" render={props => {return(<UserProfile {...props} username={username} picture_url={picture_url} signout={signout} />)}}/>
          {/* <Route component={() => <h1>PAGE NOT FOUND!<h1/>} /> */}
        </ Switch>
      </div>
    )
  }

}

export default withRouter(App);