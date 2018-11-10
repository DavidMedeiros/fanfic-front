import React, { Component } from "react";
import { Container, Grid, Divider } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Grid padded>
          <Grid.Column floated='left'>Fanfic</Grid.Column>
          <Grid.Column floated='right'>
            <Button icon labelPosition='left' floated='right'>
              <Icon name='user' />
              Login
            </Button>
          </Grid.Column>
        </Grid>
        <Divider fitted />
      </Container>
    );
  }
}

export default Navbar;
