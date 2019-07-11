import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import '../App.css';



export default class Dashboard extends Component {

  state = {
    open: false
  }

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  removeRecipe = (dayName , mealName) => {
    // We first get the current schedule
    const newSchedule = JSON.parse(localStorage.getItem('schedule'))

    newSchedule.forEach(
      (day, scheduleInd) => {
        // Find the matching day
        if (day.name === dayName) {
          day.meals.forEach(
            (meal, mealInd) => {
              // Find the matching meal
              if (meal.name === mealName) {
                console.log('Deleting recipe')
                // We need to use the indices to re-find the object we want to update
                newSchedule[scheduleInd].meals[mealInd].recipe = null
                localStorage.setItem('schedule', JSON.stringify(newSchedule))
              }
            }
          )
        }
        }
    )
  }


  handleRemoveMeal = (e) => {
    this.removeRecipe(e.target.dataset['day'], e.target.dataset['meal'])
    this.props.updateSchedule()
  }


  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { schedule } = this.props
    // debugger
    const mealCell = (meal, dayName) => {
      return <td>
        <span className="mr-20">
        {
          meal.recipe ? 
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Link to={`/search/recipe/${meal.recipe.id}`}>{meal.recipe.title}</Link>
            <div className="mt-10">
              <button 
                data-day={dayName} 
                data-meal={meal.name} 
                className='ui button mini red' 
                onClick={this.handleRemoveMeal}>Remove
              </button>
            </div>
            </div>: 
          <Link to={`/search`}><div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}><span><i class="plus icon"></i></span><span>Add</span></div></Link>
        }
        </span>
        </td>                          

    }
    
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
          <Container >
          <div className="divBanner dashBg">
          </div>
            <div className="mt-50">
              <div className="ui segment"> 
                <i className="calendar outline icon"></i><span>My Week</span>
                <table style={{background: '#fff'}} className="ui fixed single line celled table center aligned striped teal">
                  <thead>
                    <tr className="table-head">
                      {
                        [<th>MEAL</th>, ...schedule.map(dayObj => <th>{dayObj.name}</th>)]
                      }
                  </tr></thead>
                  <tbody>
                    <tr>
                      {
                        [<td><span className="mr-20">Lunch</span></td>,...schedule.map(dayObj => mealCell(dayObj.meals[0], dayObj.name))]
                      }
                    </tr>
                    <tr>
                      {
                        [<td><span className="mr-20">Dinner</span></td>,...schedule.map(dayObj => mealCell(dayObj.meals[1], dayObj.name))]
                      }
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{marginTop: '30px'}}>
                <button className="ui inverted red button left floated" > Reset Week </button>
              </div>

              {/* <div style={{marginTop: '30px'}}>
                <button className="ui teal button right floated" onClick={this.show('blurring')}>Saved Week</button>
              </div> */}

            </div>
          </Container>

      </div>
    );
  }
}
