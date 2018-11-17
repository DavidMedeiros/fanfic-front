import React, { Component } from "react";
import Author from "./Author";
import Chapter from "./Chapter";
import FicDescription from "./FicDescription";

import { Grid } from "semantic-ui-react";
import "./Fic.scss";

export default class Fic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fic: props.data
    };
  }

  render() {
    return (
      <div className="fic">
        <Grid stackable columns={2} divided inverted>
          <Grid.Row>
            <Grid.Column width={4} only="mobile tablet computer">
              <Author data={this.state.fic._author} />
            </Grid.Column>
            <Grid.Column width={12}>
              <FicDescription data={this.state.fic} />

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
