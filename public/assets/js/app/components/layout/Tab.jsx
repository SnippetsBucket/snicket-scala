import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

const styles = {
  navStyle: {
    backgroundColor: '#fff',
    color: '#22354c',
    fontWeight: 'bold',
  },
};

function handleActive(tab) {
  //alert(`A tab with this route property ${tab.props.route} was activated.`);
}

const NavTab = () => (
  <Tabs>
    <Tab
      style={styles.navStyle}
      label="New Posts"
      route="/"
      onActive={handleActive} />
    <Tab
      style={styles.navStyle}
      label="Starts"
      route="snippet/create/"
      onActive={handleActive} />
    <Tab
      style={styles.navStyle}
      label="My Posts"
      route="snippet/create/"
      onActive={handleActive} />
  </Tabs>
);

export default NavTab;
