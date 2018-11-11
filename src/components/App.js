import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.scss";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App white-text">
        <Container>
          <Navbar />
          <div className="full-height">
            <Home />
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
