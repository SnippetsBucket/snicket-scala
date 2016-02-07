import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/layout/header/';
import SnippetDetailHeader from '../../components/SnippetDetailHeader';
import SnippetDetailItem from '../../components/SnippetDetailItem';

class SnippetDetailBox extends Component {

  render() {
    return (
      <div>
      <Header />
      <div className="item-wrapper">
        <SnippetDetailHeader />
        <SnippetDetailItem />
      </div>
      </div>
    );
  }
}

SnippetDetailBox.propTypes = {
  //postData: PropTypes.func.isRequired,
  //snippets: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //postData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnippetDetailBox);
