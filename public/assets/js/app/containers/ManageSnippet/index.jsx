import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { postData } from '../../actions';

class ManageSnippet extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={this.handleSubmit}>
          <p>タイトル</p>
          <input name="title" type="text" placeholder="title"/>
          <p>本文</p>
          <input name="text" type="text" placeholder="text"/>
          <input type="submit" value="送信"/>
        </form>
      </div>
    );
  }
}

ManageSnippet.propTypes = {
  postData: PropTypes.func.isRequired,
  snippets: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSnippet);

