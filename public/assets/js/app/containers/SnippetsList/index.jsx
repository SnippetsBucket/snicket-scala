import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import CircularProgress from 'material-ui/lib/circular-progress';

import { fetchData } from '../../actions';
//import List from '../../components/layout/List';
import Header from '../../components/layout/header/';
import NavTab from '../../components/layout/Tab';
import SnippetList from '../../components/SnippetList';

class SnippetsListBox extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchData('/api/snippet/list');
  }

  renderSnippets() {
    const items = this.props.snippets.items;

    if (Object.keys(items).length) {
      return (
        <Grid>
          <Row className="show-grid">
            <Col lg={8}>
              <div>
                <SnippetList snippetList={items} />
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
        <Header />
        <NavTab />
        <div>{this.props.snippets.isFetching ? <CircularProgress mode="indeterminate" size={1.5}/> : this.renderSnippets()}</div>
      </div>
    );
  }
}

SnippetsListBox.propTypes = {
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
)(SnippetsListBox);
