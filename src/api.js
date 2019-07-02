// +++++++++++++++++++++++ SIGNIN ++++++++++++++++++++

const baseUrl = 'http://localhost:3000'
const signinUrl = baseUrl + '/signin'

export function signin (username, password){
  return fetch(signinUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json())
}

export default { signin }

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

const getRecipeDetails = (recipeId) => {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`
  return fetch(url, {
    headers: {
      "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key" : "309eb507a5msha1a3dbdc39ddf8ap1ee582jsn8732402048c5"
    }
  }).then(resp => resp.json())
}

export { getRecipes, getRecipeDetails  }