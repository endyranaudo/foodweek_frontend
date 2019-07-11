import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Card, Image, Dropdown, Button } from 'semantic-ui-react';
import RecipeDetailsLink from './RecipeDetailsLink';


class RecipeCard extends Component {

  state = {
    selectedMeal: null
  }



  add = () => {
    const splitText = this.state.selectedMeal.split(" ")
    this.props.addRecipe(splitText[0], splitText[1])
    this.props.history.push('/dashboard')
  }

  changeSelected = (e, { value }) => {
    this.setState({
      selectedMeal: value
    })
  }

  render() {

    return(
      <Card>
        {/* <div style={{maxHeight : '50px'}}> */}
          <img style={{height : '220px', maxWidth: '250px'}} src={`https://spoonacular.com/recipeImages/${this.props.recipe.image}`} wrapped ui={false}/>
        {/* </div> */}
        {/* <Image src="https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg" wrapped ui={false} /> */}
        {/* style={{objectFit: 'cover', heigth: '200'}} */}
        
        <Card.Content>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Description>
            <div className=''> <i className="clock outline icon"></i>Ready in {this.props.recipe.readyInMinutes} minutes </div>
          </Card.Description>
          <Card.Description>
            <div className=''><i className="users icon"></i> Servings: {this.props.recipe.servings}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="">
        <Dropdown
          placeholder='Select a day'
          fluid
          selection
          options={this.props.mealOptions}
          value={this.state.selectedMeal}
          onChange={this.changeSelected}
        />
        <Button disabled={!this.state.selectedMeal} color='red' inverted content='Add it!' icon='file outline' labelPosition='left' onClick={this.add} />
          <div className="ui teal button right floated">
            <RecipeDetailsLink 
              recipeId={this.props.recipe.id} 
              ingredients={this.props.ingredients}
            />
          </div>
        </Card.Content>

      </Card>
    )
  }

}



export default RecipeCard;


