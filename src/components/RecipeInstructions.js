import React from 'react';
import { Link } from 'react-router-dom';

const RecipeInstructions = (props) => (

  <div className="mt-30 mb-30">
    <h2>Preparation</h2>

    {/* <div>
      <Link to='/dashboard'>
        <button className="ui teal button right floated">Back</button>
      </Link>
    </div> */}

    <div style={{fontSize: '1.1em', lineHeight: '1.6em'}}>
      {props.instructions}
      <div style={{ marginTop: '30px'}}>
        <Link to='/dashboard'>
          <button className="ui teal button right floated">Back</button>
        </Link>
      </div>
    </div>
  </div>

)

export default RecipeInstructions