import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ficUrl } from "../../static/api";
import { limitStringSize, viewsFormatter } from "../../utils/utilityFunctions";
import "./PopularFics.scss";
import { Container, Card, Loader, Icon } from "semantic-ui-react";

export default class PopularFics extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      activeSortItem: "month",
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(ficUrl + "popular?popularity=week")
      .then(response => {
        this.setState({ data: response.data.fics.slice(0, 15) });
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleSortItemClick = (e, { name }) => {
    this.setState({ activeSortItem: name });
  };

  render() {
    return (
      <Container>
        <Loader active={this.state.isLoading} inverted />

        <Card.Group stackable centered itemsPerRow={3}>
          {this.state.data.map(fic => (
            <Card
              className="dark-card transparent-box violet-shadow"
              key={fic._id}
            >
              <Card.Content>
                <Card.Header as={Link} to={"/fic/" + fic._id}>
                  {limitStringSize(fic.title, 25)}
                </Card.Header>
                <Card.Meta>
                  By{" "}
                  <Link
                    className="author"
                    to={"/profile/" + fic._author.profile_name}
                  >
                    {fic._author.profile_name}
                  </Link>
                </Card.Meta>
                <Card.Description>
                  {limitStringSize(fic.synopsis)}
                </Card.Description>
                <Card.Content extra>
                  <Icon name="eye" />
                  {viewsFormatter(fic.views)} views
                </Card.Content>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    );
  }
}
