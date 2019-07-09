import React from 'react';

const RecipeInstructions = (props) => (

  <div className="mt-30 mb-30">
    <h2>Preparation</h2>
    <div style={{fontSize: '1.1em', lineHeight: '1.6em'}}>
      {props.instructions}
    </div>
  </div>

)

export default RecipeInstructions