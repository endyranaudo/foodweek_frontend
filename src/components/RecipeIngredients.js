import React from 'react';

const RecipeIngredients = (props) => (

  <div className="mt-20 mb-20">
    <div role="list" className="ui list">
      <span role="listitem" className="item">{props.originalString}<button className="ui teal"><i className="plus icon" onClick={() => props.handleClickAdd(props.name)}></i></button></span>
    </div>

  </div>

)

export default RecipeIngredients