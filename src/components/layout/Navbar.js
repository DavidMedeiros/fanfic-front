import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <Typography className="grow" variant="h6" color="inherit">
              FanFicer
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
