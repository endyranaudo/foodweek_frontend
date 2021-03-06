import React, { Component } from 'react';
import { Container, Card, Image, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import '../App.css';
import Background from '../images/cooking.jpg'
import NavBar from '../NavBar'


let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
  marginTop: "14px"
};


export default class componentName extends Component {

  componentDidMount = () => {
    if (!this.props.username) {
      this.props.history.push('/signin')
    }
  }
  
  render() {
    return (
      <div>
        <div>
          < NavBar signout={this.props.signout} username={this.props.username}/>
        </div>
      
        <div style={ sectionStyle }>

          <Container className="element-list">
            <div className="ui grid">
            <div className="five wide column"></div>

              <Card className="six wide column right">

                <Image src={this.props.picture_url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{this.props.username}</Card.Header>
                  {/* <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta> */}
                </Card.Content>

                <Form>
                  <Form.Field>
                    <label>Username</label>
                    <input placeholder='Last Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Old Password</label>
                    <input type="password" placeholder='Old Password' />
                  </Form.Field>
                  <Form.Field>
                    <label>New Password</label>
                    <input type="password" placeholder='New Password' />
                  </Form.Field>

                  <Link to='/dashboard'><Button className="teal right floated " type='submit'>Back</Button></Link>
                  {/* secondary inverted  */}
                  <Button className="left floated" type='submit'>Edit Profile</Button>
                </Form>
              </Card>

            <div className="five wide column"></div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}