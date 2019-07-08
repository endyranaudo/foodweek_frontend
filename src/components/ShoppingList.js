import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Card, Image} from 'semantic-ui-react';
// import { Modal, Button, Image, Header } from 'semantic-ui-react';
import '../App.css';
import listHeader from '../images/shopping.jpg'


let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: '#EBF2E0',
  marginTop: "14px"
};

export default class ShoppingList extends Component {

  state = {
    userInput: '',
  }

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }

  changeUserInput(input){
    this.setState({
        userInput: input,
    })
  }

  updatedList(){
    this.setState({
        itemList: this.props.items
    })
  }
  
  submitForm(){
    this.props.handleClickAdd(this.state.userInput)
    this.setState({ userInput: "" })
  }

  render() {
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <div style={ sectionStyle }>
          <Container className="element">
            <div className="ui grid"> 
            <div className="two wide column"></div>
              <div className="twelve wide column">
                <Card className="centered">
                  <div className="ui  middle aligned divided shoppingList ">
                    <Image src={ listHeader} wrapped ui={true} />
                    <Card.Content className="mt-20">
                    <h1 className="ui center aligned">Your shopping shoppingList</h1>
                    <div className= "ui center aligned"> 
                      <div className="ui input">
                        <input
                          id="userInput"
                          type="text"
                          placeholder="Add item..."
                          onChange={ e => this.changeUserInput(e.target.value) }
                          value={this.state.userInput} 
                        />
                        <button className="ui button teal" onClick={()=> this.submitForm()}> add </button>
                      </div>
                      <div style={{marginTop: '30px', marginBottom:'30px'}} className="ui shoppingList">
                        {
                          this.props.items.map((item) => <p className="item shoppingList"> {item.name} <input type="radio" name="radio" checked=""></input></p>)
                        }
                      </div>
                    </div>
                   </Card.Content>
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