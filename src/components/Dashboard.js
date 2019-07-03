import React, { Component } from 'react';
import { Container, Button, Modal, Segment, Menu } from 'semantic-ui-react';
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import '../App.css';

export default class Dashboard extends Component {

  state = {
    open: false 
  }

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { activeItem } = this.state
    const { open, dimmer } = this.state
    
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <Container>
          <div style={{marginTop: '30px'}}> 
            <i className="calendar outline icon"></i><span>My Week</span>
            <table className="ui fixed single line celled table center aligned striped teal">
              <thead>
                <tr className="table-head">
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday </th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td>lunch</td>
                  <td>lunch</td>
                  <td>lunch</td>
                  <td>lunch</td>
                  <td>lunch</td>
                </tr>
                <tr>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                </tr>
                <tr>
                  <td>dinner</td>
                  <td>dinner</td>
                  <td>dinner</td>
                  <td>dinner</td>
                  <td>dinner</td>
                </tr>
                <tr>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                  <td><span className="mr-20">Test Food</span> <Link to='/search'><i className="edit icon color teal"></i></Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{marginTop: '30px'}}>
            <button className="ui inverted red button left floated" > Reset Week </button>
          </div>

          <div style={{marginTop: '30px'}}>
            <Button className="ui teal button right floated" onClick={this.show('blurring')}>Saved Week</Button>
          </div>
            
            {/* TEMPLATE WEEK MODAL start */}
            <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <div>
                <Segment attached='top'>
                  <img src='https://melbuniblog.files.wordpress.com/2012/02/o_week_495_large.jpg' alt='weeklogo' />
                </Segment>

                <Menu attached='bottom' tabular>
                  <Menu.Item name='active' active={activeItem === 'active'} onClick={this.handleItemClick}>
                    Week 1
                  </Menu.Item>

                  <Menu.Item name='2' active={activeItem === '2'} onClick={this.handleItemClick}>
                    Week 2
                  </Menu.Item>

                  <Menu.Item name='3' active={activeItem === '3'} onClick={this.handleItemClick}>
                    Week 3
                  </Menu.Item>

                  <Menu.Item name='4' active={activeItem === '4'} onClick={this.handleItemClick}>
                    Week 4
                  </Menu.Item>

                  {/* <Menu.Menu style={{marginRight: '200'}} position='right'>
                    <Button className="ui button red"> Delete Selected Week</Button>
                  </Menu.Menu> */}
                </Menu>
              </div>

              
              <Modal.Actions>
                <Button className="ui button" onClick={this.close}>Back</Button>
                <Button className="ui button teal" onClick={this.close}> Select week</Button>
                <Button className="ui inverted button red left floated"> Delete Selected Week</Button>
              </Modal.Actions>
            </Modal>
            {/* MODAL end */}

        </Container>
      </div>
    );
  }
}
