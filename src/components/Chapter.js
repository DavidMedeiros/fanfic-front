import React, { Component } from "react";
import Moment from "moment";
import { Container, Header, Divider, Label } from "semantic-ui-react";

import "./Chapter.scss";

export default class Chapter extends Component {
  constructor(props) {
    super(props);

    this.state = { chapter: props.data };
  }

  render() {
    Moment.locale("pt");
    let chapter = this.state.chapter;

    return (
      <div className="chapter">
        <Container className="chapter-container" textAlign="justified" text>
          <Divider />
          <Header className="chapter-title" as="h3" inverted>
            {chapter.title}
          </Header>
          <p>{chapter.text}</p>
        </Container>
      </div>
    );
  }
}
