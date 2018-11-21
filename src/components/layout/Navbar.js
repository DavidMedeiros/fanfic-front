import React, { Component } from "react";
import { Grid, Divider, Menu } from "semantic-ui-react";
import { Button, Icon, Input } from "semantic-ui-react";
import "./Navbar.scss";

class Navbar extends Component {
  constructor() {
    super();

    this.state = { activeItem: 'home' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div className="navbar">
        <Grid columns={2}>
          <Grid.Column width={4}>
            <Button icon labelPosition="left" floated="left" color="violet">
              <Icon name="book" />
              Ficcer
            </Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <Menu inverted secondary floated="right">
              <Menu.Item
                name='My Fics'
                color="violet"
                active={false}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='Logout'
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
