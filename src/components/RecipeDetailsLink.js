import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetailsLink = (props) => (
  <div>
    <Link style={{color:'white'}} to={`/search/recipe/${props.recipeId}`}><i className="plus icon"></i>Details</Link>
  </div>
);

export default RecipeDetailsLink