// +++++++++++++++++++++++ SEARCH RECIPE ++++++++++++++++++++

const getRecipes = (searchTerm) => {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchTerm}`
  return fetch(url, {
    headers: {
      "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key" : "309eb507a5msha1a3dbdc39ddf8ap1ee582jsn8732402048c5"
    }
  }).then(resp => resp.json())
}

// +++++++++++++++++++++++ GET RECIPE INFORMATION ++++++++++++++++++++

const getRecipeDetails = () => {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information`
  return fetch(url, {
    headers: {
      "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key" : "309eb507a5msha1a3dbdc39ddf8ap1ee582jsn8732402048c5"
    }
  }).then(resp => resp.json())
}

export { getRecipes, getRecipeDetails  }