import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import '../App.css';
// import dashboardBg from '../images/dashboardBgCopy.jpg'



export default class Dashboard extends Component {

  state = {
    open: false
  }

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { schedule } = this.props

    const mealCell = meal => {
      return <td>
      <span className="mr-20">
        {
          meal.name
          }
        </span>
        <span className="mr-20">
        {
          meal.recipe ? 
          <Link to={`/search/recipe/${meal.recipe.id}`}>{meal.recipe.title}</Link> : 
          <Link to={`/search`}>Find a recipe!</Link>
        }
        </span>
        </td>                          

    }
    
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
          <Container >
            <div className="mt-50">
              <div className="ui segment"> 
                <i className="calendar outline icon"></i><span>My Week</span>
                <table style={{background: '#fff'}}className="ui fixed single line celled table center aligned striped teal">
                  <thead>
                    <tr className="table-head">
                      {
                        schedule.map(dayObj => <th>{dayObj.name}</th>)
                      }
                  </tr></thead>
                  <tbody>
                    <tr>
                      {
                        schedule.map(dayObj => mealCell(dayObj.meals[0]))
                      }
                    </tr>
                    <tr>
                      {
                        schedule.map(dayObj => mealCell(dayObj.meals[1]))
                      }
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{marginTop: '30px'}}>
                <button className="ui inverted red button left floated" > Reset Week </button>
              </div>

              <div style={{marginTop: '30px'}}>
                <button className="ui teal button right floated" onClick={this.show('blurring')}>Saved Week</button>
              </div>
            </div>
          </Container>

      </div>
    );
  }
}
