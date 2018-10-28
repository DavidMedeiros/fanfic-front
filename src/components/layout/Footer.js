import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { GithubCircle } from "mdi-material-ui";

class Footer extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" align="center">
              Copyright &copy; {new Date().getFullYear()} FanFicer{" "}
            </Typography>
            <IconButton>
              <GithubCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Footer;
