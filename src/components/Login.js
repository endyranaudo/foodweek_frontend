import React, { Component } from 'react';
import { Container, Form, Card } from 'semantic-ui-react';
import '../App.css';

export default class Login extends Component {
  render() {
    return (
      <Container>
        {/* className="inner-card" */}
        <div className="ui grid"> 
        <div className="five wide column"></div>
          <div className="six wide column">
          
          <Card>
            <img className="ui center aligned"></img>
            <h2 className="ui center aligned">FoodWeek</h2>
            <p className="ui center aligned">Please log-in or sign-up for an account</p>
            
            
            <div className="ui grid ">
              <div className="two wide column"></div>
              <div className="twelve wide column inner-card">

                <Form>
                  <Form.Field>
                    <label>Username</label>
                      <div class="ui left icon input">
                        <input type="text" placeholder="Username" />
                        <i class="user icon"></i>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                      <div class="ui left icon input">
                        <input type="password" placeholder="Password" />
                        <i class="lock icon"></i>
                    </div>
                  </Form.Field>
                </Form>

                <div className="group-btns">
                  <div class="ui checkbox left floated">
                    <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                    <label><small>Remember me</small></label>
                  </div>
                  <a className="right floated" href="#"><small>Forgot password</small></a>
                </div>

                <div>
                  <button className="ui button primary left floated ">Login</button>
                  <button className="ui button right floated">Signup</button>
                </div>
              
              </div>
              <div className="two wide column"></div>
            </div>
          </Card>

          </div>
        <div className="five wide column"></div>
        </div>
      </Container>
    )
  }
}