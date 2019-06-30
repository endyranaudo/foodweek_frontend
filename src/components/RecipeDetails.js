import React, { Component } from 'react';
import { getRecipeDetails } from '../api';

class RecipeDetails extends Component {
  
  state = {
    recipeDetail:[]
  }

  getRecipeDetails () {
    const recipeId = window.location.pathname.split('/')[3];
    return getRecipeDetails(recipeId).then((recipeDetail) => {
       this.setState({recipeDetail:recipeDetail.extendedIngredients})
    });
  }

  componentDidMount () {
    return this.getRecipeDetails()
  }

  render() {
    console.log(this.state.recipeDetail)
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default RecipeDetails
