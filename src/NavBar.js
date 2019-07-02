import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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
          <Link to='/dashboard'>
            <Menu.Item>
              <img style={{maxHeight : 50}} src='https://react.semantic-ui.com/logo.png' alt="logo"/>
            </Menu.Item>
          </Link>

          <Link to='/dashboard'>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={this.handleItemClick}
            >
              Dasboard
            </Menu.Item>
          </Link>

          <Link to='/search'>
            <Menu.Item
              name='recipes'
              active={activeItem === 'recipes'}
              onClick={this.handleItemClick}
            >
              Recipes
            </Menu.Item>
          </Link>

          <Link to='/list'>
            <Menu.Item
              name='shopping list'
              active={activeItem === 'shopping list'}
              onClick={this.handleItemClick}
            >
              Shopping List
            </Menu.Item>
          </Link>

          <Menu.Menu position='right'>
            <Link to='/user'>
              <Menu.Item
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link to='/signin'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={() => this.props.signout()}
              />
            </Link>

          </Menu.Menu>
          
        </Menu>
        {/* TOP MENU - end */}
      </div>
    );
  }
}
