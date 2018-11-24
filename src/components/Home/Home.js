import React, { Component } from "react";

import "./Home.scss";
import {
  Image,
  Header,
  Divider,
  Icon,
  Button,
  Grid,
  Card
} from "semantic-ui-react";

import SearchFics from "./SearchFics";

const src = "/img/white-image.png";

export class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Header as="h1" textAlign="center" inverted>
              <Header.Content>Ficcer</Header.Content>
              <Header.Subheader>
                A place for all fan-fiction fans
              </Header.Subheader>
            </Header>
          </Grid.Row>

          <Grid.Row>
            <SearchFics />
          </Grid.Row>

          <Divider inverted />
        </Grid>
      </div>
    );
  }
}

export default Home;
