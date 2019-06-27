import React, { Component } from 'react';
import { Container, Card, Icon, Image, Form, Button } from 'semantic-ui-react';

export default class componentName extends Component {
  render() {
    return (
      <Container>
        <div className="ui grid">
        <div className="three wide column"></div>

        <Card className="five wide column">
          <Image src='entrer url' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
                22 Friends
            </a>
          </Card.Content>
        </Card>

        <Form className="five wide column">
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>

          <Button className="teal" type='submit'>Change Password</Button>
          {/* secondary inverted  */}
          <Button type='submit'>Edit Profile</Button>
        </Form>

      <div className="three wide column"></div>
      </div>
      </Container>
    );
  }
}