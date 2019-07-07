import React, { Component } from 'react';
import { Container, Form, } from 'semantic-ui-react';
import Background from '../images/food.jpg'
import { Link } from 'react-router-dom'
import logoSignin from '../images/Logo_sign_in.png'


let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};


export default class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  // componentDidMount = () => {
  //   if (!this.props.username) {
  //     this.props.history.push('/signin')
  //   }
  // }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  
  render() {

    const { username, email, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div style={ sectionStyle }>
        <div className="element">
          <Container>
              <div className="ten wide column">
                <div  className="ui segment center aligned">
                  <div className="ui center aligned pt-20">
                  <img style={{maxHeight : 100, maxWidth: 100}} src={ logoSignin } alt="logo" />
                  </div>
                  <br></br>
                  {/* <h2 className="ui center aligned">FoodWeek</h2> */}
                  <p className="ui center aligned">Create a new account</p>
                  
                  <div className="ui grid ">
                    <div className="five wide column"></div>
                    
                    <div className="six wide column">
                      <Form onSubmit={(event) => this.props.signup(event, this.state)} >
                        <Form.Field>
                          <label>username</label>
                            <div class="ui left icon input">
                              <input 
                                onChange={handleChange}
                                name="username"
                                value={ username }
                                type="text"  
                                placeholder="create a username" 
                              />
                              <i class="user icon"></i>
                          </div>
                        </Form.Field>

                        <Form.Field>
                          <label>email address</label>
                            <div class="ui left icon input">
                              <input 
                                onChange={ handleChange }
                                type="text"  
                                value={ email }
                                placeholder="your@email.com" 
                                name="email"
                              />
                              <i class="envelope icon"></i>
                          </div>
                        </Form.Field>

                        <Form.Field>
                          <label>password</label>
                            <div class="ui left icon input">
                            <input 
                                onChange={ handleChange }
                                type="password"  
                                value={ password }
                                placeholder="create a password" 
                                name="password"
                              />
                              <i class="lock icon"></i>
                          </div>
                        </Form.Field>

                      <div style={{marginTop: '30px'}}>
                        <button onClick={ handleSubmit } type="submit" className="ui button teal left floated">Create Account</button>
                        <Link to='/dashboard'><button className="ui button right floated">Back</button></Link>
                      </div>
                      </Form>
                    
                    </div >
                    <div className="five wide column"></div>
                  </div>
                </div>
              </div>
          </Container>

        </div>
      </div>
    );
  }
}
