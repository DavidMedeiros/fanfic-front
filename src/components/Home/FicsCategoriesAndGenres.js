import React, { Component } from "react";

import "./FicsCategoriesAndGenres.scss";
import { Loader, Button, Container } from "semantic-ui-react";

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
  "brown"
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
      return colors[index % 11];
    } else {
      return colors[(index + this.state.data.length) % 11];
    }
  }

  render() {
    return (        
      <Container>
      <Loader active={this.state.isLoading} inverted />
        {this.state.data.map((data, i) => (
          <Button key={i} compact basic inverted color={this.getColor(i)}>
            {data}
          </Button>
        ))}
      </Container>
    );
  }
}
