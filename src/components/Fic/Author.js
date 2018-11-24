import React, { Component } from "react";

import {
  Image,
  Header,
  Container,
  Icon,
  Button,
  Statistic
} from "semantic-ui-react";
import "./Author.scss";
import moment from "moment";

export default class Author extends Component {
  constructor(props) {
    super(props);

    this.state = { author: props.data };
    this.genderIcon = this.genderIcon.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  genderIcon = gender => {
    switch (gender) {
      case "male":
        return { name: "man", color: "blue" };
      case "female":
        return { name: "woman", color: "pink" };
      case "other":
        return { name: "genderless", color: "violet" };
      default:
        return { name: "genderless", color: "violet" };
    }
  };

  openLink = type => {
    window.open(
      "https://" + type + ".com/" + this.state.author.social[type],
      "_blank"
    );
  };

  render() {
    let author = this.state.author;
    let gender = this.genderIcon(author.gender);
    return (
      <div className="author">
        <Container textAlign="center">
          <Header as="h3" color="violet" inverted>
            Author
          </Header>

          <Image
            className="author-image"
            src="https://pbs.twimg.com/profile_images/1046487473478651904/pZgt5qJQ_400x400.jpg"
            circular
            size="small"
            centered
          />

          <Header as="h4" color="violet" inverted>
            {author.profile_name}
          </Header>

          <p>
            {moment().diff(author.birthday, "years")} years old
            <Icon name={gender.name} color={gender.color} inverted />
          </p>

          <Statistic.Group
            className="author-statistics"
            widths="three"
            size="mini"
          >
            <Statistic color="purple" inverted>
              <Statistic.Value>
                <Icon name="book" size="small" /> {author._fics.length}
              </Statistic.Value>
              <Statistic.Label className="statistic-label">
                Fics
              </Statistic.Label>
            </Statistic>
            <Statistic color="green" inverted>
              <Statistic.Value>
                <Icon name="browser" size="small" /> {author._chapters.length}
              </Statistic.Value>
              <Statistic.Label className="statistic-label">
                Chapters
              </Statistic.Label>
            </Statistic>
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon name="star" size="small" /> {author.fav_fics.length}
              </Statistic.Value>
              <Statistic.Label className="statistic-label">
                Favs
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>

          <p>{author.description}</p>
          <Button.Group icon>
            {author.social.facebook ? (
              <Button
                circular
                color="facebook"
                icon="facebook"
                as="a"
                href={"https://www.facebook.com/" + author.social.facebook}
              />
            ) : (
              ""
            )}
            {author.social.twitter ? (
              <Button
                circular
                color="twitter"
                icon="twitter"
                as="a"
                href={"https://www.twitter.com/" + author.social.twitter}
              />
            ) : (
              ""
            )}
            {author.social.instagram ? (
              <Button
                circular
                color="instagram"
                icon="instagram"
                as="a"
                href={"https://www.instagram.com/" + author.social.instagram}
              />
            ) : (
              ""
            )}
          </Button.Group>
        </Container>
      </div>
    );
  }
}
