import React, { Component } from 'react';
import RecipeIngredients from './RecipeIngredients'
import RecipeInstructions from './RecipeInstructions'
import { getRecipeDetails } from '../api';
import NavBar from '../NavBar';




class RecipeDetails extends Component {
  
  state = {
    recipeIngredients:[],
    recipeInstructions:'Preparation Rub the chicken with paprika, salt, and pepper and set aside at room temperature for at least 1 hour or preferably in the refrigerator at least 8 hours or overnight.Preheat the oven to 400°F. '
  }

  getRecipeDetails () {
    // OLD WAY
    // const recipeId = window.location.pathname.split('/')[3];
    const recipeId = this.props.match.params.id
    return getRecipeDetails(recipeId).then((recipeDetails) => {   
       this.setState({recipeInstructions:recipeDetails.instructions, recipeIngredients:recipeDetails.extendedIngredients});
    });
  }

  componentDidMount () {
    return this.getRecipeDetails()
  }

  render() {
    console.log(this.props)
    // debugger
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <div>
        { 
          this.state.recipeIngredients.map(ingredient =>  
            <RecipeIngredients 
                // amount={ingredient.amount}
                // unit={ingredient.unit}
                name={ingredient.name}
                originalString={ingredient.originalString}
                handleClickAdd={this.props.handleClickAdd}
            />
          )
        }
        </div>
        <RecipeInstructions instructions={this.state.recipeInstructions} />
      </div>
    )
  }
}

export default RecipeDetails
