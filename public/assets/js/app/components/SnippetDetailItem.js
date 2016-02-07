import React, { Component, PropTypes } from 'react';

export default class SnippetDetailItem extends Component {


  render() {
    const snippet = this.props.snippet;

    return (
      <div className="item-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">

              {/* Parsed Markdown Text*/}
              <h1>Test</h1>

            </div>
            <div className="col-sm-3">
              <div className="snippet-right">
                <div className="snippet-right__profile clearfix">
                  <img src="{{ $snippet->users['thumbnail'] }}" className="blue-knowledge-list-thumb img-rounded"/>
                  <a href="/users/{{ $snippet->users['id'] }}">UserName</a>
                </div>
                <div className="snippet-right__snippetList">
                  <h6>Posts</h6>
                  <ul>
                    {/* @if(count($popularSnippets) !== 0) */}
                    {/* @foreach($popularSnippets as $popular) */}
                    <li><a href="/snippet/{{ $popular->snippet_id }}">Test Snippet</a></li>
                    {/* @endforeach */}
                    {/* @else */}
                    <p>Not post yet.</p>
                    {/* @endif */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SnippetDetailItem.propTypes = {
  snippet: PropTypes.object.isRequired
};
