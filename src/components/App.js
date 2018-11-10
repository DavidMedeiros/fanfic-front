import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import "./App.css";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const src = "/img/white-image.png";

class App extends Component {
  render() {
    return (
      <div className="App white-text">
        <Container>
          <Navbar />
          <Card.Group itemsPerRow={5}>
            <Card color="red" image={src} />
            <Card color="orange" image={src} />
            <Card color="yellow" image={src} />
            <Card color="olive" image={src} />
            <Card color="green" image={src} />
            <Card color="teal" image={src} />
            <Card color="blue" image={src} />
            <Card color="violet" image={src} />
            <Card color="purple" image={src} />
            <Card color="pink" image={src} />
            <Card color="teal" image={src} />
            <Card color="blue" image={src} />
            <Card color="violet" image={src} />
            <Card color="purple" image={src} />
            <Card color="pink" image={src} />
          </Card.Group>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
