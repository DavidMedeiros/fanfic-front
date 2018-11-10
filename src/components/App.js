import React, { Component } from "react";
import "./App.css";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>React says hello!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
