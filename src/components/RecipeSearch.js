import React, { Component, } from 'react';
import NavBar from '../NavBar'
import { Container, Form } from 'semantic-ui-react';
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
      // .then(result => result.recipes)
      // .then(recipes => this.setState({recipes: recipes.result}))
      .then(console.log)
  }

  componentDidMount() {
    this.getRecipes()
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {baseUrl, searchTerm} = this.state;
    this.getRecipes()
    this.setState({
     url: `${baseUrl}${searchTerm}`, searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        < NavBar />
        <div>
          <Container>
            <div className="">
              <h2 className="">What do you fancy?</h2>
              <p>We have more than 360k ideas for you</p>
              <form className="" onSubmit={this.handleSubmit}>
                <label>
                  Search for a recipe
                </label>
                <div className="ui input">
                  <input 
                    type="text"  
                    name="search" 
                    placeholder="" 
                    value={this.value}
                    onChange={this.handleChange}
                  />
                    <button className="ui button teal " type="submit">
                      Search
                    </button>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
