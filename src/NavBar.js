import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './images/Food_Week_logo_200x200_teal.png'


export default class NavBar extends Component {

  state = {
    activeItem: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div> 
        <Menu borderless>
          <Link to='/dashboard'>
            <Menu.Item className="ml-10">
              <img style={{height : 50, width: 50}} src={ logo } alt="logo"/>
            </Menu.Item>
          </Link>

          <Link to='/dashboard'>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={this.handleItemClick}
              className='mt-15'
            >
              Dasboard
            </Menu.Item>
          </Link>

          <Link to='/search'>
            <Menu.Item
              name='recipes'
              active={activeItem === 'recipes'}
              onClick={this.handleItemClick}
              className='mt-15'
            >
              Recipes
            </Menu.Item>
          </Link>

          <Link to='/list'>
            <Menu.Item
              name='shopping list'
              active={activeItem === 'shopping list'}
              onClick={this.handleItemClick}
              className='mt-15'
            >
              Shopping List
            </Menu.Item>
          </Link>

          <Menu.Menu position='right'>
            
            {/* <Menu.Item 
              name='welcome'
            /> */}

            {/* <span className="mt-25 color teal">welcome</span> */}
{/* 
              <span className="mt-25"><i className="user icon"></i></span>

            <Link to='/user'>
              <Menu.Item
                name={ this.props.username }
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
                className='mt-15'
              />
            </Link>

            <Link to='/signin'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={() => this.props.signout()}
                className='mt-15 mr-10'
              />
            </Link> */}

          </Menu.Menu>
          
        </Menu>
      </div>
    );
  }
}
