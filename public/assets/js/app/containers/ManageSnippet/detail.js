import React, { Component, PropTypes } from 'react';

import Header from '../../components/layout/header/';

class SnippetDetail extends Component {

  render() {
    return (
      <div>
      <Header />
      <div className="item-wrapper animsition">
        <div className="item-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="item-title">
                  <h1>This area is Snippet Title</h1>
                </div>
                <div className="tag-list">
                  <ul className="list-inline">

                    <li>
                      <a href="/tags/Scala"
                         className="u-tag u-tag__descript">Scala</a>
                    </li>
                    <li>
                      <a href="/tags/JavaScript"
                         className="u-tag u-tag__descript">JavaScript</a>
                    </li>

                  </ul>
                </div>
                <div className="snippet-formed-user">
                  {/* @if($snippet->users['id'] === Auth::user()->id) */}
                  <div className="btn-group">
                    <a href="/snippet/{{{ $snippet->id }}}/edit" className="btn btn-warning btn-sm">
                      Post Edit
                    </a>
                    <button type="button" className="btn btn-warning dropdown-toggle btn-sm" data-toggle="dropdown"
                            aria-expanded="false">
                      <i className="fa fa-cog"></i>
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        {/* {!! Form::open(['route'=>['snippet.destroy',$snippet->id],'method'=>'DELETE']) !!} */}
                        <button className="dropdown-form-button js-snippet-delete"><i className="fa fa-trash-o"></i>Post Delete
                        </button>
                        {/* {!! Form::close() !!} */}
                      </li>
                    </ul>
                  </div>
                  {/* @endif */}
                    <span>
                        <a href="/users/{{ $snippet->users['id'] }}"><img src="{{$snippet->users['thumbnail']}}"
                                                                          className="snippet-user-thumb img-rounded"/></a>
                        <a href="/users/{{ $snippet->users['id'] }}" className="snippet-user-name">UserName</a>1970/01/01 00:00:00
                    </span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="item-stock-view">
                  <ul className="list-inline text-center stock-list-wrapper">
                    <li className="stock-list">
                      <div className="stock-count">
                        <i className="fa fa-folder-o"></i>
                        <span className="count-num">15</span>
                      </div>
                      <div className="stock-count-text">
                        <span>Stock</span>
                      </div>
                    </li>
                    <li className="comment-list">
                      <div className="comment-count">
                        <i className="fa fa-comment-o"></i>
                        <span className="count-num">4</span>
                      </div>
                      <div className="comment-count-text">
                        <span>Comment</span>
                      </div>
                    </li>
                  </ul>
                  <form className="js-stock-form">
                      <span className="js-stock-btn" style={{width: '100%'}}>
                          <button className="btn btn-default btn-block js-spinner"><i className="fa fa-folder-o"></i>Stock
                          </button>
                      </span>
                    <input type="hidden" name="snippetId" value="{{ $snippet->id }}"/>
                    <input type="hidden" name="userId" value="{{ Auth::user()->id }}"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      </div>
    );
  }
}

SnippetDetail.propTypes = {};

export default SnippetDetail;
