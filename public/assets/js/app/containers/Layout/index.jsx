import React, { Component, PropTypes } from 'react';

import Header from '../../components/layout/header/';
import NavTab from '../../components/layout/Tab';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <NavTab />
          <div>
              {this.props.children}
          </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
