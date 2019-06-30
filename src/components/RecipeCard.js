import React from 'react';
// import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

const RecipeCard = props => {

  console.log('Recipe PROPS', props)

  return<div>
    <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>title:{props.title}</Card.Header>
      <Card.Description>
        <br></br>
        <div className=''> <i class="clock outline icon"></i>Ready in {props.recipereadyInMinutes} minutes </div>
      </Card.Description>
      <br></br>
      <Card.Description>
        <div className=''><i class="users icon"></i> Servings: {props.serving}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra className="">
      <div class="ui red button left flaoted ">
        <i class="heart icon"></i> love it!
      </div>
      <div class="ui teal button right floated ">
        <i class="plus icon"></i> details
      </div>
    </Card.Content>
  </Card>
  </div>
}

export default RecipeCard;
