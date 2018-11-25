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
import PopularFics from "./PopularFics";
import FicsCategoriesAndGenres from "./FicsCategoriesAndGenres";

const src = "/img/white-image.png";

export class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row centered>
            <Header as="h1" textAlign="center" color="violet" inverted>
              <Header.Content>Ficcer</Header.Content>
              <Header.Subheader>
                A place for all fan-fiction fans
              </Header.Subheader>
            </Header>
          </Grid.Row>

          <Grid.Row centered>
            <SearchFics />
          </Grid.Row>

          <Divider inverted />

          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h3" inverted color="violet">
                <Header.Content>Popular Fics</Header.Content>
                <Header.Subheader className="italic">Month</Header.Subheader>
              </Header>
            </Grid.Column>

            <PopularFics />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h3" inverted color="violet">
                <Header.Content>Categories</Header.Content>
              </Header>
              <FicsCategoriesAndGenres type="categories" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h3" inverted color="violet">
                <Header.Content>Genres</Header.Content>
              </Header>
              <FicsCategoriesAndGenres type="genres" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
