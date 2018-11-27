import React, { Component } from 'react';
import { Loader, Dimmer } from "semantic-ui-react";

export default class DimmerLoader extends Component {
  constructor(props) {
    super(props);

    this.state = { message: props.message || "" };
  }

  render() {
    return (
      <Loader>{this.state.message}</Loader>
    )
  }
}
