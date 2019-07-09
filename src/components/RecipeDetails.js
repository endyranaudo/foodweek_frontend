import React, { Component } from 'react';
import RecipeIngredients from './RecipeIngredients'
import RecipeInstructions from './RecipeInstructions'
import { getRecipeDetails } from '../services/api';
import NavBar from '../NavBar';
import { Container, Grid } from 'semantic-ui-react';




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

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  // http://localhost:3001/search/recipe/104385

  render() {
    // console.log(this.props)
    // debugger
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
          <div>
            <Container >
              <Grid >
                <Grid.Row columns={2}>
                  <Grid.Column width={6}>
                  <div className="mt-30 mb-20">
                    <h2>Ingredients</h2>
                  </div>
                  <p>
                    Click on the <i className="icon color teal plus circle"/> icon
                    to add the ingredient to the shopping list
                  </p>
                  <hr></hr>
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
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <RecipeInstructions instructions={this.state.recipeInstructions} />
                    </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container> 
          </div>
      </div>
    )
  }
}

export default RecipeDetails
