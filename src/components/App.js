import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React says hello!</h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    );
  }
}

export default App;
