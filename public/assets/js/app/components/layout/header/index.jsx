//import AppBar from 'material-ui/lib/app-bar';
//import IconButton from 'material-ui/lib/icon-button';
//import IconMenu from 'material-ui/lib/menus/icon-menu';
//import Menu from 'material-ui/lib/menus/menu';
//import MenuItem from 'material-ui/lib/menus/menu-item';
//import Divider from 'material-ui/lib/divider';
//import Colors from 'material-ui/lib/styles/colors';
////Icons
//import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
//import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';
//import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
//import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
//import ContentLink from 'material-ui/lib/svg-icons/content/link';
//import Delete from 'material-ui/lib/svg-icons/action/delete';
//import Download from 'material-ui/lib/svg-icons/file/file-download';
//bootstrap
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const style = {
  backgroundColor: '#22354c'
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
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Snicket</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="#">Link</NavItem>
        <NavItem href="#">Link</NavItem>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <MenuItem >Action</MenuItem>
          <MenuItem >Another action</MenuItem>
          <MenuItem >Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem >Separated link</MenuItem>
        </NavDropdown>
      </Nav>
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
