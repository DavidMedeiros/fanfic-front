import React, { Component } from "react";
import { Container, Grid, Divider } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Grid textAlign="center" verticalAlign="middle" padded centered>
          <div style={{ paddingTop: 0.6 + "rem" }}>
            So many fics, so little time.{" "}
            <strong>Ficcer &copy; {new Date().getFullYear()}</strong>
          </div>
          <Button.Group floated="right">
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="github" icon="github" />
          </Button.Group>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
