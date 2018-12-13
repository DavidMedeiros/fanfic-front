import React, { Component } from "react";
import Author from "../Fic/Author";
import NewFicModal from "./NewFicModal";
import NewChapterModal from "./NewChapterModal";
import FicCardContainer from "./FicCardContainer";
import ChapterCardContainer from './ChapterCardContainer';
import FavFicCardContainer from './FavFicCardContainer';
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
      _fics: [],
      _chapters: [],
      activeItem: 'fics'
    }
  }

  componentDidMount() {
    API.get("/user/" + this.state.profileName)
      .then(response => {
        let profile = response.data[0];
        this.setState({ profile: profile, _fics: profile._fics, _chapters: profile._chapters });
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleNewFic = newFic => {
    this.setState((state) => ({
      _fics: state._fics.concat(newFic)
    }));
  };

  handleNewChapter = newChapter => {
    this.setState((state) => ({
      _chapters: state._chapters.concat(newChapter)
    }));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  newItemComponent() {
    if (this.state.activeItem === 'fics') {
      return <NewFicModal onChange={this.handleNewFic} userId={this.state.profile} />;
    } else if (this.state.activeItem === 'chapters') {
      return <NewChapterModal />;
    } else {
      return <div></div>;
    }
  }

  itemContainerComponent() {
    if (this.state.activeItem === 'fics') {
      return <FicCardContainer data={this.state._fics} />;
    } else if (this.state.activeItem === 'chapters') {
      return <ChapterCardContainer data={this.state._chapters} />;
    } else if (this.state.activeItem === 'favorites') {
      return <FavFicCardContainer data={this.state.profile.fav_fics} />;
    } else {
      return <div></div>;
    }
  }

  render() {
    const { activeItem } = this.state;
    let newModal = this.newItemComponent();
    let itemComponent = this.itemContainerComponent();
    
    if (this.state.isLoading) {
      return <Loader active={this.state.isLoading} inverted />
    } else {
      return (
      <div className="fic">
        <Grid stackable columns={2} divided inverted>
          
          <Grid.Column width={4} only="mobile tablet computer">
            <Author data={this.state.profile} />
            <Button style={{ marginTop: 1 + "rem" }} fluid color="violet" inverted active>Edit Profile</Button>
          </Grid.Column>

          <Grid.Column width={12}>
            <Grid.Row style={{ marginBottom: 2 + "rem" }}>
              <Menu attached='top' className="no-border purple-box" size="small" pointing secondary inverted fluid widths={3}>
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
                
              </Menu>
            </Grid.Row>

            <Grid.Row className="item-container">
              {itemComponent}
            </Grid.Row>

            <Grid.Row>
              {newModal}
            </Grid.Row>
          </Grid.Column>

        </Grid>
      </div>
    )}
  }
}
