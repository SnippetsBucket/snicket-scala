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
      <div className="tabbable-panel">
        <div className="container tabbable-line">
          <ul className="nav nav-tabs ">
            <li className="active">
              <a href="/" data-toggle="tab">New Posts</a>
            </li>
            <li>
              <a href="/snippet/create/" data-toggle="tab">Stocks</a>
            </li>
            <li>
              <a href="/snippet/create/" data-toggle="tab">My Posts</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
