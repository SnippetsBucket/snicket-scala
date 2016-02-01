import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Snippet extends Component {


  render() {
    const snippet = this.props.snippet;

    return (
      <div className="snippet-list-item">
        <a href={`snippet/${snippet.id}`}><img className="snippet-list-thumb img-rounded" src="" alt="" /></a>
        <div className="snippet-list-info">
          <a href={`snippet/${snippet.id}`} className="snippet-list-title">{snippet.title}</a>
          <ul className="list-inline">
            <li>
              <a href="/tags/javascript" className="u-tag">JavaScript</a>
            </li>
          </ul>
          <p className="snippet-list-authorInfo">
            <span className="postby">Posted by<a href="users/1">UserName</a></span>
            <span className="date">{moment(snippet.createdAt).fromNow()}</span>
          </p>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  snippet: PropTypes.object.isRequired
};
