import React from 'react';
// import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

const Recipe = props => {
  console.log('Recipe PROPS', props)
  return<div>
    <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.recipe.title}</Card.Header>
      <Card.Description>
        <br></br>
        <div className=''> <i className="clock outline icon"></i>Ready in {props.recipe.readyInMinutes} minutes </div>
      </Card.Description>
      <Card.Description>
        <div className=''><i className="users icon"></i> Servings: {props.recipe.servings}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra className="">
      <div className="ui red button left flaoted ">
        <i className="heart icon"></i> LOVE IT!
      </div>
      <div className="ui teal button right floated ">
        <i className="plus icon"></i> DETAILS
      </div>
    </Card.Content>
  </Card>
  </div>
  // return <li className="ui card"> 
  //   <h2>title:{props.title}</h2> 
  // </li>

}



export default Recipe;
