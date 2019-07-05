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
                  <h3 className="heading-3">Bảng thống kê</h3>
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
                    <th>Year</th>
                    <th>annual_leave_total</th>
                    <th>annual_leave_unused</th>
                    <th>January</th>
                    <th>February</th>
                    <th>March</th>
                    <th>April</th>
                    <th>May</th>
                    <th>June</th>
                    <th>July</th>
                    <th>August</th>
                    <th>September</th>
                    <th>October</th>
                    <th>November</th>
                    <th>December</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.team}</td>
                      <td className="description">{data.attributes.user.email}</td>
                      <td className="description">{data.attributes.year}</td>
                      <td className="description">{data.attributes.annual_leave_total}</td>
                      <td className="description">{data.attributes.annual_leave_unused}</td>
                      <td className="description">{data.attributes.January}</td>
                      <td className="description">{data.attributes.February}</td>
                      <td className="description">{data.attributes.March}</td>
                      <td className="description">{data.attributes.April}</td>
                      <td className="description">{data.attributes.May}</td>
                      <td className="description">{data.attributes.June}</td>
                      <td className="description">{data.attributes.July}</td>
                      <td className="description">{data.attributes.August}</td>
                      <td className="description">{data.attributes.September}</td>
                      <td className="description">{data.attributes.October}</td>
                      <td className="description">{data.attributes.November}</td>
                      <td className="description">{data.attributes.December}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div></section>
      </div>
    );
  }
}

export default TableTrackComponent;