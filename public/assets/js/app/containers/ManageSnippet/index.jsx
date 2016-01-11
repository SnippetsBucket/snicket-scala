import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ManageSnippet extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this);
    console.log(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>タイトル</p>
          <input type="text" placeholder="title"/>
          <p>本文</p>
          <input type="text" placeholder="content"/>
        </form>
      </div>
    );
  }
}

ManageSnippet.propTypes = {};

export default ManageSnippet;
