import React, { Component, PropTypes } from 'react';

import styles from './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.text}>
        <p>header</p>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
