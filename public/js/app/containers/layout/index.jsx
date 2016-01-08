import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Header from '../../components/header/';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Header />

        <Link to="/hoge/">to hoge</Link>

        <p>piyo</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {};

export default App;
