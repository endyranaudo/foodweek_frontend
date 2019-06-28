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
    getRecipes()
      .then(recipes => this.setState({recipes}))
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
    this.setState({
     url: `${baseUrl}${searchTerm}`, searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <div>
          {/* < NavBar /> */}
        </div>
        <div>
          <Container className="element">
          <div className="">
            <div className="">
              <h1>What do you have in your fridge?</h1>
              <p>Let's find all the recipes you can make with your ingredients</p>
              <form className="" onSubmit={this.handleSubmit}>
                <label>
                  Search for a recipe
                </label>
                <div className="">
                  <input 
                    type="text"  
                    name="search" 
                    placeholder="" 
                    value={this.value}
                    onChange={this.handleChange}
                    className=""/>
                  <div className="">
                    <button className="" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </Container>
        </div>
      </div>
    );
  }
}
