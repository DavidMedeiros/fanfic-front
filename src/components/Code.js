import React, { Component } from "react";

class Code extends Component {
  constructor() {
    super();
    this.state = {
      bold: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      fetch('https://api.example.com')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

  handleClick(e) {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    return (
      <code onClick={this.handleClick}>
        {this.state.bold ? this.props.plus : "t-t"} {this.props.children}
      </code>
    );
  }
}

export default Code;
