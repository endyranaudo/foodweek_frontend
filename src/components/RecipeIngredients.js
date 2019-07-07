import React from 'react';

const RecipeIngredients = (props) => (

  <div>
    <div role="list" className="ui list">
      <div role="listitem" className="item">{props.originalString}<button className="ui button teal" onClick={() => props.handleClickAdd(props.name)}><i className="plus icon"></i></button></div>
    </div>


    {/* name: {props.name}<button onClick={() => props.handleClickAdd(props.name)}>add to list</button><br></br>
    amount: {props.amount}<br></br>
    unit: {props.unit}<br></br> */}
    <br></br>

  </div>

)

export default RecipeIngredients