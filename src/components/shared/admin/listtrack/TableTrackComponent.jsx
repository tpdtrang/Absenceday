import React, { Component } from 'react';

class TableTrackComponent extends Component {


  render() {
    return (
      <section className="wrap-container">
        <div className="wrap-form">
          <div className="p-title">
            <div className="menu-list">
              <div className="title">
                <h3 className="heading-3">Quản lý thống kê</h3>
              </div>
            </div>

          </div>
          <div className="p-table table-wrapper">
            <table className="table p-scrollbar">
              <thead>
                <tr>
                  <th rowSpan="2" className="sticky-col first-col">#</th>
                  {/* <th>Team</th> */}
                  <th rowSpan="2" className="sticky-col second-col">Người dùng</th>
                  <th rowSpan="2">Năm</th>
                  <th rowSpan="2">Tổng phép năm</th>
                  <th rowSpan="2">Tổng phép còn</th>
                  <th colSpan="12">Tháng</th>
                </tr>
                <tr>
                  <th>Tháng 1</th>
                  <th>Tháng 2</th>
                  <th>Tháng 3</th>
                  <th>Tháng 4</th>
                  <th>Tháng 5</th>
                  <th>Tháng 6</th>
                  <th>Tháng 7</th>
                  <th>Tháng 8</th>
                  <th>Tháng 9</th>
                  <th>Tháng 10</th>
                  <th>Tháng 11</th>
                  <th>Tháng 12</th>
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