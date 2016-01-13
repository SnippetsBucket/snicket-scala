import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.wrapper}>
        <div className={styles.main}>
          <p>Snicket</p>
          <input type="text" placeholder="input keywords..." />
        </div>
        <div className={styles.info}>
          <Link to="/snippet/create/">create snippet</Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
