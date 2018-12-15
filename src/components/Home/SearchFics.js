import React, { Component } from "react";
import _ from "lodash";
import { ficUrl } from "../../static/api";
import axios from "axios";
import "./SearchFics.scss";
import { Search } from "semantic-ui-react";

export default class SearchFics extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      results: [],
      value: ""
    };
  }

  componentWillMount() {
    this.resetSearchComponent();
  }

  resetSearchComponent = () => {
    this.setState({
      isLoading: false,
      results: [],
      value: ""
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
        this.setState({
          results: fics
        });
      })
      .catch(error => {
        this.setState({ results: [] });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    let { isLoading, value, results } = this.state;
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
