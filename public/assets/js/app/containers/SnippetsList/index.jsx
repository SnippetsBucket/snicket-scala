import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import { fetchData } from '../../actions';
//import List from '../../components/layout/List';
import NavTab from '../../components/layout/Tab';

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
        <Grid>
          <Row className="show-grid">
            <Col lg={8}>
              <div>
              {items.map((item, i) =>
                <a href={item.id}>{item.title}</a>
              )}
              </div>
            </Col>
          </Row>
        </Grid>
      );
    }
  }

  render() {
    return (
      <div>
        <NavTab />
        <div>{this.props.snippets.isFetching ? 'Fetching...' : this.renderSnippets()}</div>
      </div>
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
