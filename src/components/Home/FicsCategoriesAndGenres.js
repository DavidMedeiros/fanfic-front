import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./FicsCategoriesAndGenres.scss";
import { Loader, Card, Button, Container } from "semantic-ui-react";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey"
];

export default class FicsCategoriesAndGenres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      type: props.type,
      data: []
    };
  }

  componentDidMount() {
    //request
    setTimeout(() => {
      if (this.state.type === "categories") {
        this.setState({
          isLoading: false,
          data: ["Horror", "Thriller", "Romance", "Sci-Fi", "Fantasy"]
        });
      } else {
        this.setState({
          isLoading: false,
          data: [
            "yaoi",
            "comedy",
            "BlackPink",
            "Lady Gaga",
            "Crush",
            "Padrãozinho",
            "Militando"
          ]
        });
      }
    }, 1000);
  }

  getColor(index) {
    if (this.state.type === "categories") {
      return colors[index % 12];
    } else {
      return colors[(index + this.state.data.length) % 12];
    }
  }

  render() {
    return (
      <div>
        <Loader active={this.state.isLoading} inverted />
        <Container>
          {this.state.data.map((data, i) => (
            <Button key={i} compact color={this.getColor(i)}>
              {data}
            </Button>
          ))}
        </Container>
      </div>
    );
  }
}
