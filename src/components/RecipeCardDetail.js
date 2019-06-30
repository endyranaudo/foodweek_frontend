import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCardDetail = (props) => (
  <div>
    <Link to={`/search/recipe/${props.recipeId}`}>Details</Link>
  </div>
);

export default RecipeCardDetail