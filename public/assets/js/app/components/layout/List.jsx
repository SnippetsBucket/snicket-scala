import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';


export class List extends Component {

  static propTypes = {
    items: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    //const items = this.props.items;

    return (
      <ListGroup>
        {this.props.items.map((item, i) =>
          <ListGroupItem href="#${i}">{item.title}</ListGroupItem>
        )}
      </ListGroup>
    );
  }

}

//function mapStateToProps(state) {
//  return {
//    items: state.items
//  };
//}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({
//    postData
//  }, dispatch);
//}
