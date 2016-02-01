import React, { Component, PropTypes } from 'react';

import Snippet from './Snippet';

export default class SnippetList extends Component {


  render() {
    const snippetList = this.props.snippetList;

    return (
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="comments-list">
            <ul className="snippet-list">
              {snippetList.map( item =>
                <li key={item.id}>
                  <Snippet snippet={item} />
                </li>
              )}
            </ul>
          </div>
          <div className="btn-more text-center">

          </div>
        </div>
      </div>
    );
  }
}

SnippetList.propTypes = {
  snippetList: PropTypes.array.isRequired
};
