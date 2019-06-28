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
                <td>John</td>
                <td>Approved</td>
                <td title="This is much too long to fit I'm sorry about that">This is much too long to fit I'm sorry about that</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
                <td>dinner</td>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Denied</td>
                <td>Shorter description</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>

          </div>
        </Container>
      </div>
    );
  }
}
