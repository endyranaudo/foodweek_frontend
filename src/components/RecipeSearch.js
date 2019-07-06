import React, { Component, } from 'react';
import NavBar from '../NavBar'
import RecipeCard from './RecipeCard'
import { Container } from 'semantic-ui-react';
import { getRecipes } from '../services/api'

export default class RecipeSearch extends Component {

  state = {
    // recipes: [{id:'107878', title:'Garlic Chicken', readyInMinutes:4, servings:4}],
    recipes: [],
    recipe_id: null,
    searchTerm: '',
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='

  }

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  getRecipes() {
    return getRecipes(this.state.searchTerm)
      .then((recipes) => {
        this.setState({recipes:recipes.results}) 
      })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const {baseUrl, searchTerm } = this.state;
    
    return this.getRecipes().then(data => {
      console.log(this.state.recipes)
    })
    // this.setState({
    //  url: `${baseUrl}${searchTerm}`, searchTerm: ""
    // })
  }

  render() {
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <div>
          <br></br>
          <Container>
            <div className="ui grid">
              <div className="five wide column"></div>

                <div className="six wide column center aligned ">
                  <div className="">
                      <h2 className="">What do you fancy?</h2>
                      <p>We have more than 360k ideas for you</p>
                      <form className="" onSubmit={this.handleSubmit}>
                        <div className="ui input">
                          <input 
                            type="text"  
                            name="search" 
                            placeholder="" 
                            value={this.value}
                            onChange={this.handleChange}
                          />
                          <button className="ui button teal" style={{marginLeft: '5px'}} type="submit">Search</button>
                        </div>
                      </form>
                  </div>
                </div>
                
              <div className="five wide column"></div>
            </div>
            {/* SHOW RESULTS RECIPE SEARCH */}
            <div className="ui three column relaxed grid">
              {
                this.state.recipes.map(recipe => <RecipeCard recipe={recipe} ingredients={this.props.ingredients}/>)
              } 
            </div>
          </Container>
        </div>
      </div>
    );
  }
}