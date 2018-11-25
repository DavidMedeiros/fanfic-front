import React, { Component } from "react";

import {
  Header,
  Container,
  Label,
  Statistic,
  Icon,
  Rating
} from "semantic-ui-react";
import "./FicDescription.scss";
import Moment from "moment";

export default class FicDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fic: props.data,
      favoritable: props.favoritable,
      showGenres: props.showGenres
    };
    this.favFic = this.favFic.bind(this);
  }

  showFavStar(favoritable) {
    let starFav = <div />;
    if (favoritable)
      starFav = (
        <Rating
          className="fav-fic"
          icon="star"
          size="huge"
          onRate={this.favFic}
        />
      );

    return starFav;
  }

  showGenresLabels(showGenres, fic) {
    let genresEl = <div />;
    if (showGenres)
      genresEl = fic.genre.map((genre, i) => {
        return (
          <Label basic color="grey" key={i}>
            {genre}
          </Label>
        );
      });

    return genresEl;
  }

  favFic(e, rating) {
    console.log("rating", rating);
    // Do fav fic request
  }

  render() {
    let fic = this.state.fic;

    return (
      <div>
        <Container text>
          <Header color="violet" textAlign="left" as="h2" inverted>
            {fic.title}
            {this.showFavStar(this.state.favoritable)}
            <Statistic floated="right" inverted color="violet" size="tiny">
              <Statistic.Value>{fic.views}</Statistic.Value>
              <Statistic.Label>Views</Statistic.Label>
            </Statistic>
          </Header>

          <p className="italic-text">{fic.synopsis}</p>

          <Label color="violet">
            <Icon name="gay" />
            <Label.Detail>{fic.category}</Label.Detail>
          </Label>

          {this.showGenresLabels(this.state.showGenres, fic)}

          <p />

          <Label color="violet">
            Length
            <Label.Detail>1542</Label.Detail>
          </Label>
          <Label basic color="violet">
            Created at
            <Label.Detail>
              {Moment(fic.created_at).format("DD/MM/YYYY")}
            </Label.Detail>
          </Label>
        </Container>
      </div>
    );
  }
}
