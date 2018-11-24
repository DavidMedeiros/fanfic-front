import React, { Component } from "react";
import { withRouter } from "react-router";
import { Router, Link } from "react-router-dom";

import { Grid, Divider, Menu } from "semantic-ui-react";
import { Button, Icon, Input } from "semantic-ui-react";
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

    this.state = { activeItem: location };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
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
              <Menu.Item
                name="Logout"
                color="violet"
                active={false}
                onClick={this.handleItemClick}
              />
            </Menu>
            {/* <Button icon circular floated="right" primary>
              <Icon name="user" />
            </Button> */}
          </Grid.Column>
        </Grid>
        <Divider hidden />
      </div>
    );
  }
}

export default withRouter(Navbar);
