import React, { Component } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Navbar />
        <h1>React says hello!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
