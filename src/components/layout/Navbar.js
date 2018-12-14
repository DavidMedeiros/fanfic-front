import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import AuthContainer from "../SignInUp/AuthContainer";
import { getUser, logout } from '../../utils/auth';

import { Grid, Divider, Menu, Dropdown, Image } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import "./Navbar.scss";

const defaultImage = "/img/square-image.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { loginModal: false, user: { data: {}, status: false } };
    this.handleLoginModal = this.handleLoginModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    getUser()
      .then(res => {
        if (res.data.status) {
          this.setState({ user: { data: res.data.user, status: res.data.status }})
        } else {
          this.setState({ user: { data: {}, status: false }});
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleLoginModal(open) {
    this.setState({ loginModal: open });
  }

  handleLogin(user, status) {
    this.setState({ user: { data: user, status: status }})
  }

  handleLogout() {
    logout()
      .then(res => {
        this.setState({ user: { data: {}, status: false }});
        window.location.replace('/');
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let login = <div></div>;
    if (this.state.loginModal) {
      login = <AuthContainer open={this.handleLoginModal} handleLogin={this.handleLogin} />
    }

    let avatar = <div></div>;
    if (this.state.user.status) {
      avatar = (
        <span>
          <Image avatar src={ this.state.user.data.profile_pic || defaultImage } /> {this.state.user.data.profile_name}
        </span>
      )
    }

    const dropdownMenu = [
      { key: 'user', text: 'Profile', icon: 'user', as: Link, to: '/profile', selected: false, className: "purple-item" },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: this.handleLogout, selected: false, className: "purple-item" },
    ]

    return (
      <div className="navbar">
        <Grid columns={2}>
          <Grid.Column width={4}>
            <Button
              icon
              name="home"
              labelPosition="left"
              floated="left"
              color="violet"
              as={Link}
              to="/"
            >
              <Icon name="book" />
              Ficcer
            </Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <Menu inverted secondary floated="right">
              <Menu.Item
                name="home"
                color="violet"
                as={Link}
                to={"/"}
              />
              {(this.state.user.status) ?
              <Dropdown trigger={avatar} options={dropdownMenu} pointing='top left' icon={null} />
              :
              <Menu.Item
                name="Login"
                color="violet"
                active={false}
                onClick={this.handleLoginModal}
              />}
            </Menu>
          </Grid.Column>
          <Grid.Row>
            {login}
          </Grid.Row>
        </Grid>
        <Divider hidden />
      </div>
    );
  }
}

export default withRouter(Navbar);
