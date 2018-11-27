import React, { Component } from "react";

import "./Home.scss";
import {
  Header,
  Divider,
  Grid
} from "semantic-ui-react";

import SearchFics from "./SearchFics";
import PopularFics from "./PopularFics";
import FicsCategoriesAndGenres from "./FicsCategoriesAndGenres";

export class Home extends Component {
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
              </Header>
              <PopularFics />
            </Grid.Column>
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
