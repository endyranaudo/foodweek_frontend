import React, { Component, } from 'react';
import NavBar from '../NavBar'
import RecipeCard from './RecipeCard'
import { Container, Card } from 'semantic-ui-react';
import { getRecipes } from '../services/api'


export default class RecipeSearch extends Component {

  state = {
    // recipes: [
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    //   {id:'107878', title:'Garlic Chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit', readyInMinutes:4, servings:4},
    // ],
    recipes: [],
    recipe_id: null,
    searchTerm: '',
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='

  }


  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  getRecipes() {
    return getRecipes(this.state.searchTerm)
      .then((recipes) => {
        this.setState({recipes:recipes.results}) 
        this.setState({
          searchTerm: ''
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //     this.setState({
    //   searchTerm: ''
    // })
    
    return this.getRecipes().then(data => {
      // console.log(this.state.recipes)
    })
    // this.setState({
    //   searchTerm: ''
    // })
  }

  value = () => {
    ''
  }

  render() {
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <div>
          <Container className="mt-20">
            <div className="ui grid">
                <div className="sixteen wide column center aligned">
                  <h2 className="">What do you fancy?</h2>
                  <p>We have more than 360k ideas for you</p>
                  <form className="" onSubmit={this.handleSubmit}>
                    <div className="ui input">
                      <input 
                        type="text"  
                        name="search" 
                        placeholder="" 
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                      />
                      <button className="ui button teal" style={{marginLeft: '5px'}} type="submit">Search</button>
                    </div>
                  </form>
                </div>
              </div>
                
              {/* SHOW RESULTS RECIPE SEARCH */}
                <Card.Group className="ui grid" itemsPerRow={4}>
                  {
                    this.state.recipes.map(recipe => <RecipeCard {...this.props} mealOptions={this.props.schedule.reduce((mealOptions, dayObj) => {
                      if (!dayObj.meals[0].recipe) {
                      mealOptions.push({
                        key: `${dayObj.name} ${dayObj.meals[0].name}`,
                        text: `${dayObj.name} ${dayObj.meals[0].name}`,
                        value: `${dayObj.name} ${dayObj.meals[0].name}`
                      })
                    }
                      if (!dayObj.meals[1].recipe) {
                      mealOptions.push({
                        key: `${dayObj.name} ${dayObj.meals[1].name}`,
                        text: `${dayObj.name} ${dayObj.meals[1].name}`,
                        value: `${dayObj.name} ${dayObj.meals[1].name}`
                      })
                    }
                      return mealOptions
                    }, [])} addRecipe={(day, meal) => this.props.addRecipe(recipe, day, meal)} recipe={recipe} ingredients={this.props.ingredients}/>)
                  } 
                </Card.Group>

          </Container>
        </div>
      </div>
    );
  }
}