import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchData } from '../../actions';

function loadData() {
  //fetchData('/api/snippet/list');
};

class SnippetsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchData('/api/snippet/list');
  }

  renderSnippets() {
    const items = this.props.snippets.items;

    if (items) {
      return (
        <ul>
          {items.map((item, i) =>
            <li key={i}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </li>
          )}
        </ul>
      );
    }
  }

  render() {
    return (
      <div>{this.props.snippets.isFetching ? '取得中' : this.renderSnippets()}</div>
    );
  }
}

SnippetsList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  snippets: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnippetsList);
