import React, { Component } from 'react';

class TableTrackComponent extends Component {
  render() {
    return (
      <section className="wrap-container">
        <div className="wrap-form">
          <div className="p-title">
            <div className="menu-list">
              <div className="title">
                <h3 className="heading-3">Quản Lí thống kê</h3>
              </div>
            </div>
          </div>
          <div className="p-table table-wrapper">
            <table className="table p-scrollbar">
              <thead>
                <tr>
                  <th rowSpan="2" className="sticky-col first-col">#</th>
                  {/* <th>Team</th> */}
                  <th rowSpan="2" className="sticky-col second-col">User</th>
                  <th rowSpan="2">Year</th>
                  <th rowSpan="2">annual_leave_total</th>
                  <th rowSpan="2">annual_leave_unused</th>
                  <th colSpan="12">Month</th>
                  <th rowSpan="2">Total holidays</th>
                </tr>
                <tr>
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
                    <td className="description sticky-col first-col">{data.id}</td>
                    {/* <td className="description">{data.attributes.team}</td> */}
                    <td className="description sticky-col second-col">{data.attributes.user.email}</td>
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
                    <td className="description">123</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default TableTrackComponent;