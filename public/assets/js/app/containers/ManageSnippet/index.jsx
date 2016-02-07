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
      textAreaStyle: {
        height: 500,
        borderRadius: '2px 0 0 2px'
      },
      textAreaCol: {
        padding: 0
      }
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
      text: e.target[1].value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row className="show-grid">
            <Col lg={12}>
              <form onSubmit={this.handleSubmit}>
                <div className="clearfix">
                  <Input name="title" type="text" style={FormStyles.common} bsSize="large" placeholder="Title" />
                  <div>
                    <Col lg={6} style={this.styles.textAreaCol}>
                      <Input name="text" id="markdown-here" onChange={this.parseMD} type="textarea" style={this.styles.textAreaStyle} placeholder="Input Markdown..." />
                    </Col>
                    <Col lg={6} style={this.styles.textAreaCol}>
                      <SnippetDetailPreview preview={this.props.snippets.previewHtml} />
                    </Col>
                  </div>
                </div>
                <ButtonInput className="pull-right" bsStyle="success" type="submit" value="Post snippet" />
              </form>
            </Col>
          </Row>
        </Grid>
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

