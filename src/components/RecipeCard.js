import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import RecipeDetailsLink from './RecipeDetailsLink';

class RecipeCard extends Component {

  render() {

    return(
      <div>
        <Card>
        {/* <Image src={`"https://" + ${this.props.recipe.image}`} wrapped ui={false} /> */}
        <Image src="https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Description>
            <br></br>
            <div className=''> <i className="clock outline icon"></i>Ready in {this.props.recipe.readyInMinutes} minutes </div>
          </Card.Description>
          <Card.Description>
            <div className=''><i className="users icon"></i> Servings: {this.props.recipe.servings}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="">
          <div className="ui red button left flaoted ">
            <i className="heart icon"></i> LOVE IT!
          </div>
          <div className="ui teal button right floated ">
            <RecipeDetailsLink 
              recipeId={this.props.recipe.id} 
              ingredients={this.props.ingredients}
            />
          </div>
        </Card.Content>
      </Card>

      </div>
    )
  }

}



export default RecipeCard;


