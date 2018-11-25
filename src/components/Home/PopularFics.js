import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./PopularFics.scss";
import { Container, Header, Menu, Grid, Card, Loader } from "semantic-ui-react";

export default class PopularFics extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      activeSortItem: "month"
    };
  }

  componentDidMount() {
    //request
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  limitStringSize(text, size = 40) {
    return text.slice(0, size) + (text.length > size ? "..." : "");
  }

  handleSortItemClick = (e, { name }) => {
    this.setState({ activeSortItem: name });
  };

  render() {
    let activeSortItem = this.state.activeSortItem;
    let reactSwipeEl;

    return (
      <div>
        <Container>
          <Loader active={this.state.isLoading} inverted />
          <Grid stackable>
            <Grid.Row verticalAlign="middle" columns={2}>
              <Grid.Column width={6}>
                <Header as="h3" inverted color="violet">
                  <Header.Content>Popular Fics</Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={10}>
                <Menu className="sort-menu" secondary inverted floated="right">
                  <Menu.Item header>Sort By</Menu.Item>
                  <Menu.Item
                    name="day"
                    active={activeSortItem === "day"}
                    onClick={this.handleSortItemClick}
                  />
                  <Menu.Item
                    name="week"
                    active={activeSortItem === "week"}
                    onClick={this.handleSortItemClick}
                  />
                  <Menu.Item
                    name="month"
                    active={activeSortItem === "month"}
                    onClick={this.handleSortItemClick}
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid>
            <Card.Group stackable centered itemsPerRow={3}>
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
          </Grid>
        </Container>
      </div>
    );
  }
}
