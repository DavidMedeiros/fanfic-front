import React, { Component } from "react";
import Author from "../Fic/Author";
import NewFicModal from "./NewFicModal";
import NewChapterModal from "./NewChapterModal";
import API from '../../api';

import "./Profile.scss";
import { Grid, Loader, Menu, Button, Icon } from 'semantic-ui-react';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      profileName: props.match.params.profile_name,
      authProfile: false,
      profile: {},
      activeItem: 'fics'
    }
  }

  componentDidMount() {
    API.get("/user/" + this.state.profileName)
      .then(response => {
        this.setState({ profile: response.data[0] });
        console.log("get profile", response);
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  newComponent() {
    if (this.state.activeItem === 'fics') {
      return <NewFicModal />;
    } else if (this.state.activeItem === 'chapter') {
      return <NewChapterModal />;
    }
  }

  render() {
    const { activeItem } = this.state;
    let newModal = <div></div>;

    if (this.state.activeItem === 'fics') {
      newModal = <NewFicModal />;
    } else if (this.state.activeItem === 'chapters') {
      newModal = <NewChapterModal />;
    }

    if (this.state.isLoading) {
      return <Loader active={this.state.isLoading} inverted />
    } else {
      return (
      <div className="fic">
        <Grid stackable columns={2} divided inverted>
          <Grid.Row>
            <Grid.Column width={4} only="mobile tablet computer">
              <Author data={this.state.profile} />
              <Button style={{ marginTop: 1 + "rem" }} fluid color="violet" inverted active>Edit Profile</Button>
            </Grid.Column>

            <Grid.Column width={12}>
              <Menu className="no-border purple-box" size="small" pointing secondary inverted>
                <Menu.Item name='fics' active={activeItem === 'fics'} onClick={this.handleItemClick} />
                <Menu.Item
                  name='chapters'
                  active={activeItem === 'chapters'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='favorites'
                  active={activeItem === 'favorites'}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                  <Menu.Item name='newFic'>
                    {newModal}
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )}
  }
}
