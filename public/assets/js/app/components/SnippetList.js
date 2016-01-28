import React, { Component, PropTypes } from 'react';

export default class SnippetList extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const snippetList = this.props.snippetList;

    return (
      <div className="tab-content">
        <div className="tab-pane active" id="newarrival">
          <div className="comments-list" id="articles-list">
            <ul className="blue-knowledge-list">
              {snippetList.map( item =>
              <li>
                <a href=""><img className="blue-knowledge-list-thumb img-rounded" src="" alt="" /></a>
                <div className="blue-knowledge-list-info">
                  <a href={item.id} className="blue-knowledge-list-title">{item.title}</a>
                  <ul className="list-inline">
                     <li>
                     <a href="/tags/javascript" className="u-tag">JavaScript</a>
                     </li>
                  </ul>
                  <p className="blue-knowledge-list-name">
                    <span>Posted by</span><a href="users/1">Suzumi</a><span>2 hours ago</span>
                  </p>
                </div>
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
