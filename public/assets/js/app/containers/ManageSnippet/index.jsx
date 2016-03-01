import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MarkDownIt from 'markdown-it';

import { postData, changePreview } from '../../actions';
import Header from '../../components/layout/header/';
import FormStyles from '../../components/FormStyles';
import SnippetDetailPreview from '../../components/SnippetDetailPreview';

class ManageSnippet extends Component {
  constructor(props) {
    super(props);
    this.md = new MarkDownIt();
    this.parseMD = this.parseMD.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.styles = {
      height: '100%'
    };
  }

  parseMD() {
    let html = document.getElementById('markdown-here').value;
    this.props.changePreview(this.md.render(html))
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.postData('/api/snippet/create', {
      title: e.target[0].value,
      text: e.target[2].value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="snippet-form-wrapper">
          <form onSubmit={this.handleSubmit}>
          <div className="container-fluid snippet-form-container">

              <div className="row title">
                <div className="col-sm-12">
                  <div className="snippet-form-title">
                    <input type="text" name="title" className="form-control" placeholder="Title" required />
                  </div>
                </div>
              </div>
              <div className="row content">
                <div className="col-sm-12" style={this.styles}>
                  <div className="snippet-body-wrapper clearfix">
                    <div className="col-sm-6 snippet-body-left">
                      <div className="snippet-form-tabs">
                        <span className="snippet-form-tab" style={{display: 'inline-block', backgroundColor: '#fff'}}>Write</span>
                        <button type="button" className="comment-form-tab" data-toggle="modal" data-target="#markdown-help"><i className="fa fa-question-circle"></i>How to markdown</button>
                      </div>
                      <div className="snippet-form-body-panel">
                        <textarea className="form-control snippet-form-body" onChange={this.parseMD} id="markdown-here" name="text" placeholder="Input Markdown..." required></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6 snippet-body-right">
                      <div className="snippet-form-tabs">
                        <span className="snippet-form-tab" style={{display: 'block'}}>Preview</span>
                      </div>
                        <SnippetDetailPreview preview={this.props.snippets.previewHtml} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row submit-btn-area">
                <div className="col-sm-12" style={this.styles}>
                  <button className="btn btn-success pull-right" style={{height: '90%'}}><i className="fa fa-pencil-square-o"></i>Post</button>
                </div>
              </div>

          </div>
          </form>
        </div>
      </div>
    );
  }
}

ManageSnippet.propTypes = {
  postData: PropTypes.func.isRequired,
  snippets: PropTypes.object.isRequired,
  changePreview: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postData,
    changePreview
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSnippet);

