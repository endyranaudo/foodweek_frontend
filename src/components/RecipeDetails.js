import React, { Component } from 'react';
import RecipeIngredients from './RecipeIngredients'
import RecipeInstructions from './RecipeInstructions'
import { getRecipeDetails } from '../services/api';
import NavBar from '../NavBar';
import { Container, Grid } from 'semantic-ui-react';




class RecipeDetails extends Component {
  
  state = {
    recipeIngredients:[],
    recipeInstructions:''
  }

  getRecipeDetails () {
    // OLD WAY
    // const recipeId = window.location.pathname.split('/')[3];
    const recipeId = this.props.match.params.id
    getRecipeDetails(recipeId).then((recipeDetails) => {   
       this.setState({recipeInstructions:recipeDetails.instructions, recipeIngredients:recipeDetails.extendedIngredients});
    });
    console.log(this.state)
  }

 

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
    this.getRecipeDetails()
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
