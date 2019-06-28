import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {

  state = {
    activeItem: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    
    return (
      <div>
        {/* TOP MENU - start */}
        <Menu borderless>
          <Menu.Item>
            <img style={{maxHeight : 50}} src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item
            name='dasboard'
            active={activeItem === 'dasboard'}
            onClick={this.handleItemClick}
          >
            Dasboard
          </Menu.Item>

          <Menu.Item
            name='recipes'
            active={activeItem === 'recipes'}
            onClick={this.handleItemClick}
          >
            Recipes
          </Menu.Item>

          <Menu.Item
            name='shopping list'
            active={activeItem === 'shopping list'}
            onClick={this.handleItemClick}
          >
            Shopping List
          </Menu.Item>


          
          <Menu.Menu position='right'>
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
          
        </Menu>
        {/* TOP MENU - end */}
      </div>
    );
  }
}
