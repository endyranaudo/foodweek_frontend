import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Card } from 'semantic-ui-react';
// import { Modal, Button, Image, Header } from 'semantic-ui-react';
import '../App.css';



let sectionStyle = {
  width: "100%",
  height: "100vh",
};

export default class ShoppingList extends Component {

  state = {
    userInput: '',
    itemsList: []
  }

  changeUserInput(input){
    this.setState({
        userInput: input,
    }, 
    () => console.log(input))
  }

  addToList(input){
    let listArray = this.state.itemsList
    listArray.push(input)
    this.setState({
      itemsList: listArray,
    })
  }

  updatedList(){
    this.setState({
        itemList: this.props.items
    })
    // let userInput = document.querySelector('#userInput')
    // userInput: ''
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
                          id="userInput"
                          type="text"
                          placeholder="Add item..."
                          onChange={ e => this.changeUserInput(e.target.value) }
                          value={this.state.userInput} 
                        />
                        <button className="ui button teal" onClick={()=> this.props.handleClickAdd(this.state.userInput)}> add </button>
                      </div>
                      <div className="ui itemsList">
                        {
                          this.props.items.map((item) => <p className="item itemsList"> {item} <input type="radio" name="radio" checked=""></input></p>)
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



// eslint-disable-next-line
{/* <Modal trigger={<Button>Show Modal</Button>}>
  <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
        </Modal.Description>
    </Modal.Content>
</Modal> */}