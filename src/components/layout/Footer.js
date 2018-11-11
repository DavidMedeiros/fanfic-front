import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Divider className="fitted-bottom" hidden />
        <Grid textAlign="center" verticalAlign="middle" padded centered>
          <div style={{ paddingTop: 0.6 + "rem" }}>
            <strong>Ficcer &copy; {new Date().getFullYear()}</strong>
          </div>
          <a className="social-link" href="https://twitter.com/gabmla">
            <Button circular color="twitter" icon="twitter" />
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/gabmla/">
            <Button circular color="linkedin" icon="linkedin" />
          </a>
          <a className="social-link" href="https://github.com/gabrielmla">
            <Button circular color="grey" icon="github" />
          </a>
        </Grid>
      </div>
    );
  }
}

export default Footer;
