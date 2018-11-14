import React, { Component } from 'react'
import Moment from 'moment';
import { Container, Header, Divider, Label } from "semantic-ui-react";

import './Chapter.scss';

export default class Chapter extends Component {

  constructor() {
    super();

    this.state = {
      chapter: {text: ""}
    }
  }

  componentDidMount() {
    this.setState({
      chapter: this.props.data
    }, () => console.log('chapter', this.state));
  }

  render() {
    Moment.locale('pt');
    let chapter = this.state.chapter;
    
    return (
      <div className="chapter">
        <Container className="container" text>
          <Divider />
          <Header as='h2' inverted>{chapter.title}</Header>
          <p>{chapter.text}</p>
          <Label basic color="violet">
            Characters
            <Label.Detail>{chapter.text.length}</Label.Detail>
          </Label>
          <Label color="violet">
            Created at
            <Label.Detail>{Moment(chapter.created_at).format('DD/MM/YYYY')}</Label.Detail>
          </Label>
        </Container>
      </div>
    );
  }
}
