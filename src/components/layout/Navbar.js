import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {apiUrl} from '../../static/api';
import axios from 'axios';
import AuthContainer from "../SignInUp/AuthContainer";

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

    this.state = { activeItem: location, loginModal: false, user: {}, userStatus: false };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    axios.get(apiUrl + 'auth').then(res => { this.setState({ loggedUser: res.data.user, userStatus: res.data.status }) });
  }

  componentWillUpdate() {
    axios.get(apiUrl + 'auth').then(res => { this.setState({ loggedUser: res.data.user, userStatus: res.data.status }) });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogin(open) {
    this.setState({ loginModal: open });
  }

  handleLogout() {
    axios.delete(apiUrl + 'auth')
      .then(res => { 
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let login = <div></div>;
    if (this.state.loginModal) {
      login = <AuthContainer open={this.handleLogin} />
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
              {(this.state.userStatus) ?
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
                onClick={this.handleLogin}
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
