import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Card } from 'semantic-ui-react';
import '../App.css';

let sectionStyle = {
  width: "100%",
  height: "100vh",
};

export default class Login extends Component {

  state = {
    userInput: '',
    itemsList: []
  }

  changeUserInput(input){
    this.setState({
        userInput: input
    }, () => console.log(input))
  }

  addToList(input){
    let listArray = this.state.itemsList
    listArray.push(input)
    this.setState({
      itemsList: listArray,
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
                  <div className="ui middle aligned divided itemsList">
                    <h1 className="ui center aligned">Your shopping itemsList</h1>
                    <div className= "ui center aligned"> 
                      <div className="ui input">
                        <input 
                          type="text" 
                          placeholder="Add item..." 
                          onChange={ e => this.changeUserInput(e.target.value) }
                          value={this.state.userInput} 
                        />
                        <button className="ui button teal" onClick={()=> this.addToList(this.state.userInput)}> add </button>
                      </div>
                      <div className="ui itemsList">
                        {
                          this.state.itemsList.map((item) => <p className="item itemsList"> {item} <input type="radio" name="radio" checked=""></input></p>)
                        }
                      </div>
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



