import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import { limitStringSize, viewsFormatter } from "../../utils/utilityFunctions";
import "./FicCardContainer.scss";
import { Container, Card, Loader, Icon } from "semantic-ui-react";

export default class FicCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="fic-card-container">
        <Card.Group stackable itemsPerRow={3}>
          {this.props.data.map(fic => (
            <Card
              className="dark-card transparent-box violet-shadow"
              key={fic._id}
              as={Link}
              to={"/fic/" + fic._id}
            >
              <Card.Content>
                <Card.Header>{limitStringSize(fic.title, 25)}</Card.Header>
                <Card.Meta>
                  Created at{" "}
                  <span>{Moment(fic.created_at).format("DD/MM/YYYY")}</span>
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
