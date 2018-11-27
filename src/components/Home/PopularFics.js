import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from '../../api';

import "./PopularFics.scss";
import { Container, Card, Loader } from "semantic-ui-react";

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
    API.get('/fic/popular?popularity=week')
      .then(response => {
        this.setState({ data: response.data.fics });
        console.log("get popular", response);
      })
      .catch(error => {
        console.log("deu ruim", error)
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  limitStringSize(text, size = 40) {
    return text.slice(0, size) + (text.length > size ? "..." : "");
  }

  handleSortItemClick = (e, { name }) => {
    this.setState({ activeSortItem: name });
  };

  render() {
    //let activeSortItem = this.state.activeSortItem;

    return (
      <Container>
        <Loader active={this.state.isLoading} inverted />

        <Card.Group stackable centered itemsPerRow={3}>

          {this.state.data.map(fic => (
            <Card className="dark-card transparent-box violet-shadow" key={fic._id}>
              <Card.Content>
                <Card.Header as={Link} to={ { pathname: "/fic/" + fic._id, state: { data: fic } } }>
                  {this.limitStringSize(fic.title, 25)}
                </Card.Header>
                <Card.Meta>
                  By{" "}
                  <Link className="author" to="/">
                    {fic._author.profile_name}
                  </Link>
                </Card.Meta>
                <Card.Description>
                  {this.limitStringSize(fic.synopsis)}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}

          <Card className="dark-card transparent-box violet-shadow">
            <Card.Content>
              <Card.Header>
                {this.limitStringSize("Matthew Harrisssssssssssss", 25)}
              </Card.Header>
              <Card.Meta>
                By{" "}
                <Link className="author" to="/">
                  shakepaulinha
                </Link>
              </Card.Meta>
              <Card.Description>
                {this.limitStringSize(
                  "Matthew is a pianist living in Nashville."
                )}
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="dark-card transparent-box violet-shadow">
            <Card.Content>
              <Card.Header content="Jake Smith" />
              <Card.Meta content="Musicians" />
              <Card.Description
                content={this.limitStringSize(
                  "Jake is a drummer living in New York."
                )}
              />
            </Card.Content>
          </Card>

          <Card className="dark-card transparent-box violet-shadow">
            <Card.Content
              header="Elliot Baker"
              meta="Friend"
              description={this.limitStringSize(
                "Elliot is a music producer living in Chicago."
              )}
            />
          </Card>

          <Card
            className="dark-card transparent-box violet-shadow"
            header="Jenny Hess"
            meta="Friend"
            description={this.limitStringSize(
              "Jenny is a student studying Media Management at the New School"
            )}
          />

          <Card className="dark-card transparent-box violet-shadow">
            <Card.Content
              header="Elliot Baker"
              meta="Friend"
              description={this.limitStringSize(
                "Elliot is a music producer living in Chicago."
              )}
            />
          </Card>
        </Card.Group>
      </Container>
    );
  }
}
