import React, { Component } from "react";
import Author from "./Author";
import Chapter from "./Chapter";
import FicDescription from "./FicDescription";
import axios from 'axios';
import { apiUrl } from '../../static/api';

import { Grid, Loader } from "semantic-ui-react";
import "./Fic.scss";

export default class Fic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      ficId: props.match.params.fic_id,
      fic: {}
    };
  }

  componentDidMount() {
    axios.get(apiUrl + "/fic/" + this.state.ficId)
      .then(response => {
        this.setState({ fic: response.data });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <Loader active={this.state.isLoading} inverted />
    } else {
      return (
        <div className="fic">
          <Grid stackable columns={2} divided inverted>
            <Grid.Row>
              <Grid.Column width={4} only="mobile tablet computer">
                <Author data={this.state.fic._author} />
              </Grid.Column>
              <Grid.Column width={12}>
                <FicDescription
                  data={this.state.fic}
                  favoritable={true}
                  showGenres={true}
                />

                {this.state.fic._chapters.map(chapter => (
                  <Chapter data={chapter} key={chapter._id} />
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  }
}
