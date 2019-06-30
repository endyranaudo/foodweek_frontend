import React, { Component } from 'react';
import { Form } from 'react-router-dom'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='Read only' readOnly />
            <Form.Input fluid label='Last name' placeholder='Read only' readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Input label='Email' placeholder='yourname@youremail.com' />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
