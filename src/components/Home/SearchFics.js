import React, { Component } from "react";

import "./SearchFics.scss";
import { Search } from "semantic-ui-react";

export default class SearchFics extends Component {
  constructor() {
    super();

    this.state = {
      searchField: { isLoading: false, results: [], value: "" },
      other: {}
    };
  }

  componentWillMount() {
    this.resetSearchComponent();
  }

  resetSearchComponent = () =>
    this.setState({
      searchField: {
        isLoading: false,
        results: [],
        value: ""
      }
    });

  handleResultSelect = (e, { result }) =>
    this.setState({
      value: result.title
    });

  handleSearchChange = (e, { value }) => {
    if (value.length > 0) {
      this.setState({ searchField: { isLoading: true, value } });
    } else {
      return this.resetSearchComponent();
    }
  };

  render() {
    let { isLoading, value, results } = this.state.searchField;
    return (
      <Search
        className="search-box"
        size="big"
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        fluid
      />
    );
  }
}
