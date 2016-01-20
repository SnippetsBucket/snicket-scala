import React, { Component, PropTypes } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';


export default class NavTab extends Component {

  //static propTypes = {
  //  items: PropTypes.object.isRequired
  //};

  constructor(props) {
    super(props);
    this.styles = {
      navStyle: {
        backgroundColor: '#fff',
        color: '#22354c',
        fontWeight: 'bold',
      },
    };
  }

  handleActive(tab) {
  //alert(`A tab with this route property ${tab.props.route} was activated.`);
  }

  render() {
    //const items = this.props.items;
    return (
      <Tabs>
        <Tab
          style={this.styles.navStyle}
          label="New Posts"
          route="/"
          onActive={this.handleActive} />
        <Tab
          style={this.styles.navStyle}
          label="Starts"
          route="snippet/create/"
          onActive={this.handleActive} />
        <Tab
          style={this.styles.navStyle}
          label="My Posts"
          route="snippet/create/"
          onActive={this.handleActive} />
      </Tabs>
    );
  }

}
