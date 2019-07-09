import React, { Component } from 'react';
import { Segment, Grid, Container, Header, Icon, Button, Image, } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Background from '../images/food.jpg'
import Logo from '../images/Logo_sign_in.png'


let sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};


export default class Landing extends Component {
  render() {
    return (
      <div style={ sectionStyle }>
        <Container className="element">
          <Segment >
            <div placeholder>
              <div className="">
                <h1 className="text align center">Welcome to</h1>
                <Image className="centered mt-20 mb-20" style={{height: 150}} src={Logo}></Image>
              </div>
            </div>
            <Grid columns={2} stackable textAlign='center'>
              {/* <Divider vertical>Or</Divider> */}

              <Grid.Row className="mb-20" verticalAlign='middle'>
                <Grid.Column >
                  <Header icon>
                    <Icon name='user circle' />
                    Already have an account?
                  </Header>
                  <div>
                    <Link to='/signin'><Button className="ui button teal">Sign In</Button></Link>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    <Icon name='pencil alternate' />
                    Sign Up for a new account
                  </Header>
                  <div>
                    <Link to='/signup'><Button className="ui button">Create Account</Button></Link>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
