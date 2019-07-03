import React, { Component } from 'react';
import { Container, Form, Card } from 'semantic-ui-react';
import '../App.css';
import Background from '../images/food.jpg'
import { signin } from '../api'

let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};

export default class Signin extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    signin(this.state.username, this.state.password)
      .then(data => {
        if (data.error){
          alert(data.error)
        } else {
          this.props.signin(data)
          // this.props.history.push('/dashboard')
        }
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {

    const {username, password} = this.state
    const {handleChange, handleSubmit} = this
    return (
      <div style={ sectionStyle }>
      <Container className="element">
        <div className="ui grid"> 
        <div className="five wide column"></div>
          <div className="six wide column">

          <Card className="centered">
            <div className="ui center aligned pt-20">
            <img style={{maxHeight : 100, maxWidth: 100, maring: '50'}} src='https://react.semantic-ui.com/logo.png' alt="logo" />
            </div>
            <h2 className="ui center aligned">FoodWeek</h2>
            <p className="ui center aligned">Please log-in or sign-up for an account</p>
            
            <div className="ui grid ">
              <div className="two wide column"></div>
              <div className="twelve wide column inner-card">

                <Form className="mb-20">
                  <Form.Field>
                    <label>Username</label>
                      <div class="ui left icon input">
                        <input 
                          id= 'usernameInput'
                          type="text"  
                          placeholder="Username" 
                          value={username}
                          onChange={handleChange}
                          name="username"
                        />
                        <i class="user icon"></i>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                      <div class="ui left icon input">
                      <input 
                          id= 'passwordInput'
                          type="password"  
                          placeholder="Password" 
                          value={ password }
                          onChange={ handleChange }
                          name="password"
                        />
                        <i class="lock icon"></i>
                    </div>
                  </Form.Field>
                </Form>

                <div className="mb-20">
                  <div class="ui checkbox left floated">
                    <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                    <label><small>Remember me</small></label>
                  </div>
                  <p className="right floated" href="#"><small>Forgot password</small></p>
                </div>

                {/* ADD MARGIN BOTTOM 20PX */}
                <div style={{marginTop: '60px'}}>
                  <button onClick={ handleSubmit } className="ui button teal left floated">Signin</button>
                  <button className="ui button right floated">Signup</button>
                </div>
              
              </div >
              <div className="two wide column"></div>
            </div>
          </Card>


          </div>
        <div className="five wide column"></div>
        </div>
      </Container>
      </div>
    )
  }
}