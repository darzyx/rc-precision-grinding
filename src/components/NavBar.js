import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._handleMenuItemClick = this._handleMenuItemClick.bind(this);
  };

  _handleMenuItemClick(e, { name }) {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div id='nav-bar'>
        <Menu fixed='top' inverted>
          <Menu.Item
            name='RCPG'
            active={activeItem === 'RCPG'}
            href='/'
            onClick={this._handleMenuItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              href='#about'
              onClick={this._handleMenuItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              href='#contact'
              onClick={this._handleMenuItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar;
