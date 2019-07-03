import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import '../App.css';

export default class Dashboard extends Component {


  render() {
    return (
      <div>
        < NavBar signout={this.props.signout} username={this.props.username}/>
        <Container>
          <div> 
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
        </Container>
      </div>
    );
  }
}
