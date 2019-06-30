import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../NavBar'
import '../App.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        < NavBar />
        <Container>
          <div> 
          <i className="calendar outline icon"></i><span>My Week</span>
            
          <table class="ui fixed single line celled table center aligned striped teal">
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
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
              </tr>
              <tr>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
              </tr>
              <tr>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
                <td><span className="mr-20">Test Food</span> <i className="edit icon color teal"></i></td>
              </tr>
            </tbody>
          </table>

          </div>
        </Container>
      </div>
    );
  }
}
