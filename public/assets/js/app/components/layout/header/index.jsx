import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import Colors from 'material-ui/lib/styles/colors';
//Icons
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import ContentLink from 'material-ui/lib/svg-icons/content/link';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Download from 'material-ui/lib/svg-icons/file/file-download';

const style = {
  backgroundColor: Colors.blue50,
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
  <AppBar
    style={style}
    title="Snicket"
    titleStyle={{color: Colors.black}}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton
            color={Colors.black}>
            <MoreVertIcon />
          </IconButton>
        }
        style={iconStyles}
        color={Colors.black}
        targetOrigin={{horizontal: 'left', vertical: 'middle'}}
        anchorOrigin={{horizontal: 'left', vertical: 'middle'}}
      >
            <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
            <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
            <Divider />
            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
            <MenuItem primaryText="Download" leftIcon={<Download />} />
            <Divider />
            <MenuItem primaryText="Remove" leftIcon={<Delete />} />

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
