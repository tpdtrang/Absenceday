import React, { Component } from 'react';

class TableTrackComponent extends Component {
  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Table User</h3>
                </div>
              </div>
            </div>
            <div className="p-table">
              <table className="table p-scrollbar">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>User</th>
                    <th>annual_leave_total</th>
                    <th>annual_leave_unused</th>
                    <th>January</th>
                    <th>February</th>
                    <th>NAme</th>
                    <th>Phone</th>
                    <th>Team</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="description">1</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div></section>
      </div>
    );
  }
}

export default TableTrackComponent;