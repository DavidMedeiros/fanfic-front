import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import AuthContainer from "../SignInUp/AuthContainer";
import { getUser, logout } from '../../utils/auth';

import { Grid, Divider, Menu } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import "./Navbar.scss";


class Navbar extends Component {
  constructor(props) {
    super(props);

    let location = "";
    if (props.location.pathname === "/profile") {
      location = "profile";
    } else if (props.location.pathname === "/") {
      location = "home";
    }

    this.state = { activeItem: location, loginModal: false, user: { data: {}, status: false } };
    this.handleItemClick = this.handleItemClick.bind(this);
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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
        window.location.replace('/')
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { getUser } = this.props;

    let login = <div></div>;
    if (this.state.loginModal) {
      login = <AuthContainer open={this.handleLoginModal} handleLogin={this.handleLogin} />
    }

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
              onClick={this.handleItemClick}
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
                active={this.state.activeItem === "home"}
                onClick={this.handleItemClick}
                as={Link}
                to={"/"}
              />
              <Menu.Item
                name="profile"
                color="violet"
                active={this.state.activeItem === "profile"}
                onClick={this.handleItemClick}
                as={Link}
                to="/profile"
              />
              {(this.state.user.status) ?
              <Menu.Item
                name="Logout"
                color="violet"
                active={false}
                onClick={this.handleLogout}
              />
              :
              <Menu.Item
                name="Login"
                color="violet"
                active={false}
                onClick={this.handleLoginModal}
              />}
            </Menu>
            {/* <Button icon circular floated="right" primary>
              <Icon name="user" />
            </Button> */}
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
