import React, { Component, } from 'react';
import NavBar from '../NavBar'
import Recipe from './Recipe'
import { Container } from 'semantic-ui-react';
import { getRecipes } from '../api'

export default class RecipeSearch extends Component {

  state = {
    recipes: [],
    recipe_id: null,
    searchTerm: '',
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='

  }

  getRecipes() {
    getRecipes(this.state.searchTerm)
      .then(console.log)
  }

  // componentDidMount() {
  //   this.getRecipes( recipea)
  // }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {baseUrl, searchTerm, recipes} = this.state;
    this.getRecipes()
    this.setState({
     url: `${baseUrl}${searchTerm}`, searchTerm: ""
    })
    // HERE ????
    this.setState({ recipes })
    console.log('RECIPES AFTER', recipes)
  }

  render() {
    return (
      <div>
        < NavBar />
        <div>
          <br></br>
          <Container>
            <div className="ui grid">
              <div className="five wide column"></div>
                <div className="six wide column">
                  <h2 className="ui center aligned">What do you fancy?</h2>
                  <p>We have more than 360k ideas for you</p>
                  <form className="ui center aligned" onSubmit={this.handleSubmit}>
                    <br></br>
                    <div className="ui input">
                      <input 
                        type="text"  
                        name="search" 
                        placeholder="" 
                        value={this.value}
                        onChange={this.handleChange}
                      />
                        <button className="ui button teal " type="submit">Search</button>
                    </div>
                  </form>
                </div>
              <div className="five wide column"></div>
            </div>
            {/* SHOW RESULTS RECIPE SEARCH */}
            <div className="">
              <ul>
                <Recipe title={console.log('Recipe from Search', this.state.recipes)}/>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}


// My first console.log tells me that my fetch works.
// {results: Array(10), baseUri: "https://spoonacular.com/recipeImages/", offset: 0, number: 10, totalResults: 333, …}
// baseUri: "https://spoonacular.com/recipeImages/"
// expires: 1562075558398
// isStale: false
// number: 10
// offset: 0
// processingTimeMs: 443
// results: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// totalResults: 333
// __proto__: Object
// Recipe from Search >> []
// In Recipe.js component I get: Recipe PROPS {title: undefined}