import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import Colors from 'material-ui/lib/styles/colors';

const style = {
  backgroundColor: Colors.amber800
};

const Header = () => (
  <AppBar
    style={style}
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
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
