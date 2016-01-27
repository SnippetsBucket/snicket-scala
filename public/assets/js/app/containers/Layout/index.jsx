import React, { Component, PropTypes } from 'react';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Route } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isFullScreenPage = this.props.location.pathname === "/login" ? true : false;

    return (
      <div
        className={isFullScreenPage ? "isFullScreenPage" : ""}>
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {};

export default App;
