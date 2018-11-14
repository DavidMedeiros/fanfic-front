import React, { Component } from 'react'

import './Chapter.scss';

export default class Chapter extends Component {

  constructor() {
    super();

    this.state = {
      chapter: {}
    }
  }

  componentDidMount() {
    this.setState({
      chapter: this.props.data
    }, () => console.log('chapter', this.state));
  }

  render() {
    let chapter = this.state.chapter;
    return (
      <div>
        {chapter.title}
      </div>
    )
  }
}
