import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/layout/header/';
import SnippetDetailHeader from '../../components/SnippetDetailHeader';
import SnippetDetailItem from '../../components/SnippetDetailItem';
import { fetchItem } from '../../actions';

class SnippetDetailBox extends Component {

  componentWillMount() {
    console.log(this.props.params.snippetId);
    this.props.fetchItem(`/api/snippet/get/${this.props.params.snippetId}`);
  }

  render() {
    const item = this.props.snippets.item;
    console.log(item);
    return (
      <div>
      <Header />
      <div className="item-wrapper">
        <SnippetDetailHeader snippet={item} />
        <SnippetDetailItem snippet={item} />
      </div>
      </div>
    );
  }
}

SnippetDetailBox.propTypes = {
  fetchItem: PropTypes.func.isRequired
  //snippets: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchItem
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnippetDetailBox);
