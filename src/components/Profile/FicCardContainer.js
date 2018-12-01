import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Moment from "moment";
import './FicCardContainer.scss';

import { Container, Card, Loader, Icon } from 'semantic-ui-react';

export default class FicCardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fics: props.data
    }
  }

  limitStringSize(text, size = 40) {
    return text.slice(0, size) + (text.length > size ? "..." : "");
  }

  viewsFormatter(views) {
    return views > 999 ? (views/1000).toFixed(1) + 'k' : views
  }

  render() {
    return (
      <Container className="fic-card-container">

        <Card.Group stackable centered itemsPerRow={3}>

          {this.state.fics.map(fic => (
            <Card className="dark-card transparent-box violet-shadow" key={fic._id} as={Link} to={ "/fic/" + fic._id }>
              <Card.Content>
                <Card.Header>
                  {this.limitStringSize(fic.title, 25)}
                </Card.Header>
                <Card.Meta>
                  Created at{" "}<span>{Moment(fic.created_at).format("DD/MM/YYYY")}</span>
                </Card.Meta>
                <Card.Description>
                  {this.limitStringSize(fic.synopsis)}
                </Card.Description>
                <Card.Content extra>
                  <Icon name='eye' />
                  {this.viewsFormatter(fic.views)} views
                </Card.Content>
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
        </Card.Group>
      </Container>
    )
  }
}
