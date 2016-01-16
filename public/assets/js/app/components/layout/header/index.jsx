import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
//bootstrap
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Input from 'react-bootstrap/lib/Input';

import FormStyles from '../../FormStyles';

const style = {
  backgroundColor: '#fff',
  //color: '#c4cdda',
  borderRadius: '0'
};
const iconStyles = {
  marginRight: 24,
};
const menuStyle = {
  menu: {
    marginRight: 32,
    marginBottom: 32,
    float: 'left',
    position: 'relative',
    zIndex: 0,
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

// header: #22354c
// footer: #e6edf4
const Header = () => (
    <Navbar style={style}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Snicket</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <Input type="search" style={FormStyles.common} placeholder="Search"/>
          {' '}
        </Navbar.Form>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Post" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="snippet/create/">New Post</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={4} title="UserName" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>My Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.2}>Settings</MenuItem>
            <MenuItem eventKey={4.3}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);

//<header className={styles.wrapper}>
//  <div className={styles.main}>
//    <p>Snicket</p>
//    <input type="text" placeholder="input keywords..." />
//  </div>
//  <div className={styles.info}>
//    <Link to="/snippet/create/">create snippet</Link>
//  </div>
//</header>

export default Header;
