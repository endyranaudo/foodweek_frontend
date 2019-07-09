import React, { Component } from 'react';
import { Container, Form, Card } from 'semantic-ui-react';
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
      <Container className="element">
        <div className="three wide column"></div>
          <div className="sixten wide column">

          <Card className="ui segment centered ">
            <div className="ui center aligned mt-20">
            <img style={{maxHeight : 120, maxWidth: 120}} src={ logoSignin } alt="logo" />
            </div>
              {/* <h2 className="ui center aligned">FoodWeek</h2> */}
              <p className="ui center aligned mt-10">Create a new account</p>
            
              <div className="ui grid ">
                <div className="two wide column"></div>
                <div className="twelve wide column inner-card">

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

                  <div style={{marginTop: '30px'}} className="ui center aligned mt-20">
                    <button onClick={ handleSubmit } type="submit" className="ui button teal">Create Account</button>
                  </div>
                  <div className="ui center aligned mt-20">
                    <Link to='/dashboard'><button className="ui button">Back to Sign in</button></Link>
                  </div>
                </Form>
              
              </div >
              <div className="two wide column"></div>
            </div>
          </Card>


        </div>
        <div className="three wide column"></div>
      </Container>
      </div>
    )
  } 

  //   return (
  //     <div style={ sectionStyle }>
  //       <div className="element">
  //         <Container>
  //             <div className="ui grid">
  //               <div  className="ui segment center aligned">
  //                 <div className=" ten wide column  center aligned pt-20">
  //                 <img style={{maxHeight : 100, maxWidth: 100}} src={ logoSignin } alt="logo" />
  //                 </div>
  //                 <br></br>
  //                 {/* <h2 className="ui center aligned">FoodWeek</h2> */}
  //                 <p className="ui center aligned">Create a new account</p>
                  
  //                 <div className="ui grid ">
                    
  //                   <div className="sixteen wide column center aligned">
  //                     <Form onSubmit={(event) => this.props.signup(event, this.state)} >
  //                       <Form.Field>
  //                         <label>username</label>
  //                           <div class="ui left icon input">
  //                             <input 
  //                               onChange={handleChange}
  //                               name="username"
  //                               value={ username }
  //                               type="text"  
  //                               placeholder="create a username" 
  //                             />
  //                             <i class="user icon"></i>
  //                         </div>
  //                       </Form.Field>

  //                       <Form.Field>
  //                         <label>email address</label>
  //                           <div class="ui left icon input">
  //                             <input 
  //                               onChange={ handleChange }
  //                               type="text"  
  //                               value={ email }
  //                               placeholder="your@email.com" 
  //                               name="email"
  //                             />
  //                             <i class="envelope icon"></i>
  //                         </div>
  //                       </Form.Field>

  //                       <Form.Field>
  //                         <label>password</label>
  //                           <div class="ui left icon input">
  //                           <input 
  //                               onChange={ handleChange }
  //                               type="password"  
  //                               value={ password }
  //                               placeholder="create a password" 
  //                               name="password"
  //                             />
  //                             <i class="lock icon"></i>
  //                         </div>
  //                       </Form.Field>

  //                     <div style={{marginTop: '30px'}}>
  //                       <button onClick={ handleSubmit } type="submit" className="ui button teal left floated">Create Account</button>
  //                       <Link to='/dashboard'><button className="ui button right floated">Back</button></Link>
  //                     </div>
  //                     </Form>
                    
  //                   </div >
  //                 </div>
  //               </div>
  //             </div>
  //         </Container>

  //       </div>
  //     </div>
  //   );
  // }


}