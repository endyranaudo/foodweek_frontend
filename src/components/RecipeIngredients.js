import React from 'react';

const RecipeIngredients = (props) => (
  <div className="mt-30 mb-30 ">
    
    <div role="list" className="ui list ">
      <span role="listitem" style={{fontSize: '1.2em'}} className="item">{props.originalString}<span><a onClick={() => props.handleClickAdd(props.name)}> <i className="icon color teal plus circle"/> </a></span></span>
    </div>

  </div>

)

export default RecipeIngredients