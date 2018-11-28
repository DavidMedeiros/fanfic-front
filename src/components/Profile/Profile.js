import React, { Component } from "react";
import API from '../../api';

import "./Profile.scss";
import { Container, Grid, Loader } from 'semantic-ui-react';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      profileName: props.match.params.profile_name,
      authProfile: false,
      profile: {}
    }
  }

  componentDidMount() {
    API.get("/user/" + this.state.profileName)
      .then(response => {
        this.setState({ profile: response.data[0] });
        console.log("get profile", response);
      })
      .catch(error => {
        console.log("deu ruim", error)
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <Loader active={this.state.isLoading} inverted />
    } else {
      return <div>EU sou um profile muy lindo.</div>;
    }
  }
}
