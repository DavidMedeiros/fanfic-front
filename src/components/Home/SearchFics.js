import React, { Component } from "react";
import _ from "lodash";
import { ficUrl } from "../../static/api";
import axios from "axios";
import "./SearchFics.scss";
import { Search, Label } from "semantic-ui-react";

export default class SearchFics extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      results: [],
      value: "",
      hasResults: false
    };
  }

  componentWillMount() {
    this.resetSearchComponent();
  }

  resetSearchComponent = () => {
    console.log("resetando");
    this.setState({
      isLoading: false,
      results: [],
      value: "",
      hasResults: false
    });
  };

  handleResultSelect = (e, { result }) =>
    this.setState({
      value: result.title
    });

  handleSearchChange = (e, { value }) => {
    this.setState(
      {
        isLoading: true,
        value: value
      },
      () => {
        if (this.state.value.length < 1) return this.resetSearchComponent();
      }
    );

    axios
      .get(ficUrl + "search?title=" + value)
      .then(response => {
        const fics = response.data.fics;
        let fic = { title: fics[0].title, description: fics[0].category };

        this.setState({
          results: fics,
          hasResults: fics.length > 0
        });
      })
      .catch(error => {
        this.setState({ results: [], hasResults: [].length > 0 });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    let { isLoading, value, results, hasResults } = this.state;
    return (
      <Search
        className="search-box"
        size="big"
        placeholder="Discover Fics!"
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        fluid
      />
    );
  }
}
