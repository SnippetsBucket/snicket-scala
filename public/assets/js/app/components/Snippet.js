import React, { Component, PropTypes } from 'react';

export default class Snippet extends Component {


  render() {
    const snippet = this.props.snippet;

    return (
      <div className="snippet-list-item">
        <a href=""><img className="snippet-list-thumb img-rounded" src="" alt="" /></a>
        <div className="snippet-list-info">
          <a href={snippet.id} className="snippet-list-title">{snippet.title}</a>
          <ul className="list-inline">
            <li>
              <a href="/tags/javascript" className="u-tag">JavaScript</a>
            </li>
          </ul>
          <p className="snippet-list-name">
            <span>Posted by</span><a href="users/1">Suzumi</a><span>2 hours ago</span>
          </p>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  snippet: PropTypes.object.isRequired
};
