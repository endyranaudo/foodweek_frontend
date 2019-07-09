import React, { Component } from 'react';
import { Container, Form, Card } from 'semantic-ui-react';
import '../App.css';
import Background from '../images/food.jpg'
import { Link } from 'react-router-dom'
import { signin } from '../services/api'
import logoSignin from '../images/Logo_sign_in.png'

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
          this.props.history.push('/dashboard')
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
        <div className="five wide column"></div>
          <div className="six wide column">

          <Card className="centered">
            <div className="ui center aligned mt-20">
            <img style={{maxHeight : 120, maxWidth: 120}} src={ logoSignin } alt="logo" />
            </div>
              {/* <h2 className="ui center aligned">FoodWeek</h2> */}
              <p className="ui center aligned mt-10">Please signin or create your account</p>
            
              <div className="ui grid ">
                <div className="two wide column"></div>
                <div className="twelve wide column inner-card">

                <Form className="mb-20">
                  <Form.Field>
                    <label>Username</label>
                      <div className="ui left icon input">
                        <input 
                          id= 'usernameInput'
                          type="text"  
                          placeholder="Username" 
                          value={username}
                          onChange={handleChange}
                          name="username"
                        />
                        <i className="user icon"></i>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                      <div className="ui left icon input">
                      <input 
                          id= 'passwordInput'
                          type="password"  
                          placeholder="Password" 
                          value={ password }
                          onChange={ handleChange }
                          name="password"
                        />
                        <i className="lock icon"></i>
                    </div>
                  </Form.Field>
                </Form>

                {/* <div className="mb-20">
                  <div class="ui checkbox left floated">
                    <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                    <label><small>Remember me</small></label>
                  </div>
                  <p className="right floated" href="#"><small>Forgot password</small></p>
                </div> */}

                {/* ADD MARGIN BOTTOM 20PX */}
                <div style={{marginTop: '30px'}}>
                  <button onClick={ handleSubmit } className="ui button teal left floated">Sign in</button>
                  < Link to='/signup' ><button className="ui button right floated">New user?</button></Link>
                </div>
              
              </div >
              <div className="two wide column"></div>
            </div>
          </Card>


        </div>
        <div className="five wide column"></div>
      </Container>
      </div>
    )
  }
}