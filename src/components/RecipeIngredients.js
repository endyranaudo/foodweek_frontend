import React from 'react';

const RecipeIngredients = (props) => (

  <div>
    <div role="list" class="ui list">
      <div role="listitem" class="item">{props.originalString}<button onClick={() => props.handleClickAdd(props.name)}>add to list</button></div>
    </div>


    {/* name: {props.name}<button onClick={() => props.handleClickAdd(props.name)}>add to list</button><br></br>
    amount: {props.amount}<br></br>
    unit: {props.unit}<br></br> */}
    <br></br>

  </div>

)

export default RecipeIngredients