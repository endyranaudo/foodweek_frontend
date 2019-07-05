import React, { Component } from 'react';
import { Container, Form, Card } from 'semantic-ui-react';
import Background from '../images/food.jpg'
// import { signup } from '../api'


let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};


export default class Signup extends Component {

  // componentDidMount = () => {
  //   if (!this.props.username) {
  //     this.props.history.push('/signin')
  //   }
  // }

  handleSubmit = () => {

  }
  
  render() {

    const {handleSubmit } = this
    return (
      <div style={ sectionStyle }>
      <Container className="element">
        <div className=""> 
        <div className="five wide column"></div>
          <div className="six wide column">

          <Card className=" centered ">
            <div className="ui center aligned pt-20">
            <img style={{maxHeight : 100, maxWidth: 100, maring: '50'}} src='https://react.semantic-ui.com/logo.png' alt="logo" />
            </div>
            <h2 className="ui center aligned">FoodWeek</h2>
            <p className="ui center aligned">Create a new account</p>
            
            <div className="ui grid ">
              <div className="two wide column"></div>
              <div className="twelve wide column inner-card ">

                <Form className="mb-20">
                  <Form.Field>
                    <label>username</label>
                      <div class="ui left icon input">
                        <input 
                          id= 'usernameInput'
                          type="text"  
                          placeholder="Username" 
                          // value={username}
                          // onChange={handleChange}
                          name="username"
                        />
                        <i class="user icon"></i>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label>email address</label>
                      <div class="ui left icon input">
                        <input 
                          id= 'usernameInput'
                          type="text"  
                          placeholder="your@email.com" 
                          // value={username}
                          // onChange={handleChange}
                          name="email"
                        />
                        <i class="envelope icon"></i>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label>password</label>
                      <div class="ui left icon input">
                      <input 
                          id= 'passwordInput'
                          type="password"  
                          placeholder="Password" 
                          // value={ password }
                          // onChange={ handleChange }
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
                  <button onClick={ handleSubmit } className="ui button teal left floated">Create Account</button>
                  <button className="ui button right floated">back</button>
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
    );
  }
}
