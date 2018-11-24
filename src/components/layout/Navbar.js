import React, { Component } from "react";
import { Router, Link } from "react-router-dom";

import { Grid, Divider, Menu } from "semantic-ui-react";
import { Button, Icon, Input } from "semantic-ui-react";
import "./Navbar.scss";

class Navbar extends Component {
  constructor() {
    super();

    this.state = { activeItem: "home" };
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
              name="Home"
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
                name="Home"
                color="violet"
                active={this.state.activeItem === "Home"}
                onClick={this.handleItemClick}
                as={Link}
                to={"/"}
              />
              <Menu.Item
                name="Profile"
                color="violet"
                active={this.state.activeItem === "Profile"}
                onClick={this.handleItemClick}
                as={Link}
                to="/profile"
              />
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
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

export default Navbar;
