import React, { Component } from 'react'

import './Author.scss';

export default class Author extends Component {

  constructor() {
    super();

    this.state = {
      author: {}
    }
  }

  componentDidMount() {
    this.setState({
      author: this.props.data
    }, () => console.log('author', this.state));
  }

  render() {
    let author = this.state.author;
    return (
      <div>
        {author.profile_name}
      </div>
    )
  }
}
