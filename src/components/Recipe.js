import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const Recipe = props => {
  console.log('Recipe PROPS', props)
  return<div>
    <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>title:{props.title}</Card.Header>
      <Card.Description>
        <br></br>
        <div className=''> <i class="clock outline icon"></i>Ready in {props.readyInMinutes} minutes </div>
      </Card.Description>
      <Card.Description>
        <div className=''><i class="users icon"></i> Servings: {props.serving}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra className="">
      <div class="ui red button left flaoted ">
        <i class="heart icon"></i> LOVE IT!
      </div>
      <div class="ui teal button right floated ">
        <i class="plus icon"></i> DETAILS
      </div>
    </Card.Content>
  </Card>
  </div>
  // return <li className="ui card"> 
  //   <h2>title:{props.title}</h2> 
  // </li>

}



export default Recipe;
