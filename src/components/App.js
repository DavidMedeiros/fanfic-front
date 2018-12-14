import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "./App.scss";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Fic from "./Fic/Fic";
import Profile from "./Profile/Profile";

class App extends Component {

  render() {
    return (
      <div className="App white-text">
        <BrowserRouter>
          <Container>
            <Navbar />
            <div className="full-height">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" key="my-profile" component={Profile} />
                <Route exact path="/profile/:profile_name" key="user-profile" component={Profile} />
                <Route exact path="/fic/:fic_id" component={Fic} />
              </Switch>
            </div>
            <Footer />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
