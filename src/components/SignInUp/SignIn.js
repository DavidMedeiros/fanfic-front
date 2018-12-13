import React, { Component } from 'react'
import {apiUrl} from '../../static/api';
import axios from 'axios';

import './SignIn.scss';
import { Button, Form, Input } from 'semantic-ui-react';

export default class SignIn extends Component {
  state = { username: '', password: '', signupSuccess: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post(apiUrl + 'auth', user)
      .then(res => {
        if (res.status === 200) {
          this.setState({ signupSuccess: true })
          axios.get(apiUrl + 'auth').then(res => { console.log(res) })
        }
      })

    this.setState({ username: '', password: '' })
  }

  render() {
    const { username, password } = this.state;

    return (
      <Form className='attached fluid segment' onSubmit={this.handleSubmit}>
        <Form.Input
          type="text"
          autoComplete="username"
          label="Username"
          placeholder='Username'
          name='username'
          value={username}
          onChange={this.handleChange} />
        <Form.Input
          type="password"
          autoComplete="new-password"
          label="Password"
          placeholder='Password'
          name='password'
          value={password}
          onChange={this.handleChange} />
        <Form.Button content='Login' type="submit"/>
      </Form>
    )
  }
}
