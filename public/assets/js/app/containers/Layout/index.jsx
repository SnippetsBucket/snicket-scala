import React, { Component, PropTypes } from 'react';

import Header from '../../components/layout/header/';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
