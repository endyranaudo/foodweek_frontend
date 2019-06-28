import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Input, Card } from 'semantic-ui-react';
import '../App.css';

let sectionStyle = {
  width: "100%",
  height: "100vh",
};

export default class Login extends Component {

  state = {
    userInput: '',
    list: []
  }

  changeUserInput(input){
    this.setState({
        userInput: input
    }, () => console.log(input))
  }

  addToList(input){
    let listArray = this.state.list
    listArray.push(input)
    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div>
        < NavBar />
        <div style={ sectionStyle }>
          <Container className="element">
            <div className="ui grid"> 
            <div className="two wide column"></div>
              <div className="twelve wide column">

              <Card className="centered">
                <div class="ui middle aligned divided list">
                  <h2 className="ui center aligned">Your shopping list</h2>
                  <div className= "ui center aligned"> 
                  <div class="ui input">
                    <input 
                      type="text" 
                      placeholder="Add item..." 
                      onChange={ e => this.changeUserInput(e.target.value) }
                      value={this.state.userInput} 
                    />
                    <button className="ui button teal" onClick={()=> this.addToList(this.state.userInput)}> add </button>
                  </div>
                    <ul>
                      {this.state.list.map((item) => <li>{item}</li>)}
                    </ul>
                  </div>
                </div> 
              </Card>


              </div>
            <div className="two wide column"></div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}



