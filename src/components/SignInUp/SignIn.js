import React, { Component } from 'react'
import { login, getUser } from '../../utils/auth';

import './SignIn.scss';
import { Button, Form, Input } from 'semantic-ui-react';


export default class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = { username: '', password: '', signupSuccess: false, handleLogin: props.handleLogin, openModal: props.open }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user.username, user.password)
      .then(res => {
        if (res.status === 200) {
          this.setState({ signupSuccess: true })
          getUser().then(res => {
            this.state.handleLogin(res.data.user, res.data.status);
            this.state.openModal(false);
          });
        }
      });

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
