import React, { Component } from "react";

import { Header, Container, Label, Statistic, Icon } from "semantic-ui-react";
import "./FicDescription.scss";
import Moment from "moment";

export default class FicDescription extends Component {
  constructor(props) {
    super(props);

    this.state = { fic: props.data };
  }

  render() {
    let fic = this.state.fic;
    return (
      <div>
        <Container text>
          <Header color="violet" textAlign="left" as="h2" inverted>
            {fic.title}
            <Label color="violet">
              <Icon name="gay" />
              <Label.Detail>{fic.category}</Label.Detail>
            </Label>
            <Statistic floated="right" inverted color="violet" size="tiny">
              <Statistic.Value>{fic.views}</Statistic.Value>
              <Statistic.Label>Views</Statistic.Label>
            </Statistic>
          </Header>

          <p className="italic-text">{fic.synopsis}</p>

          <p>
            {fic.genre.map(genre => {
              return (
                <Label basic color="gray">
                  {genre}
                </Label>
              );
            })}
          </p>

          <Label basic color="violet">
            Length
            <Label.Detail>1542</Label.Detail>
          </Label>
          <Label color="violet">
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
