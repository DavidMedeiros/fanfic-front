import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Divider hidden />
        <Grid textAlign="center" verticalAlign="middle" padded centered>
          <div style={{ paddingTop: 0.6 + "rem" }}>
            So many fics, so little time.{" "}
            <strong>Ficcer &copy; {new Date().getFullYear()}</strong>
          </div>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="grey" icon="github" />
        </Grid>
      </div>
    );
  }
}

export default Footer;
