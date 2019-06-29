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
  BackgroundRepeat: 'no-repeat'
};


export default class componentName extends Component {
  render() {
    return (
      <div>
        < NavBar />
        {/* <br></br> */}
      
        <div style={ sectionStyle }>

          <Container className="element">
            <div className="ui grid">
            <div className="three wide column"></div>
              <Card className="five wide column left floated">
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card className="five wide column right">
                <Form className="five wide column bg-transp">
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
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

            <div className="three wide column"></div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}