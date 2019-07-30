import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class ListRegistrantion extends Component {

  render() {
    return (
      <section className="wrap-container">
        <div className="wrap-form">
        <div className="b-title">
            <h1 className="title">Thống Kê Người Đăng Ký Nghỉ</h1>
          </div>
          <div className="b-table table-wrapper">
            <table className="table b-scrollbar">
              <thead>
                <tr>
                  <th rowSpan="2" className="sticky-col first-col">#</th>
                  <th rowSpan="2" className="sticky-col second-col">Người Đăng Ký</th>
                  <th rowSpan="2">Năm</th>
                  <th rowSpan="2">Tổng phép năm</th>
                  <th rowSpan="2">Tổng phép còn</th>
                  <th colSpan="12">Tháng</th>
                  <th rowSpan="2">Nghỉ ốm</th>
                  <th rowSpan="2">Nghỉ đám cưới</th>
                  <th rowSpan="2">Nghỉ thai sản</th>
                  <th rowSpan="2">Nghỉ ma chay</th>
                  <th rowSpan="2">Nghỉ phép không lương</th>
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
                {
                  cookies.get('data') !== undefined ?
                  this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description sticky-col first-col">{data.id}</td>
                      <td className="description item-1 sticky-col second-col">{data.attributes.user.name}</td>
                      <td className="description">{data.attributes.year}</td>
                      <td className="description">{data.attributes.annual_leave_total}</td>
                      <td className="description">{data.attributes.annual_leave_unused}</td>
                      <td className="description b-detail">{data.attributes.January}
                        {
                          Array.isArray(data.attributes.dateDetails.January) ?
                            data.attributes.dateDetails.January.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.February}                        
                        {
                          Array.isArray(data.attributes.dateDetails.February) ?
                            data.attributes.dateDetails.February.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.March}
                        {
                          Array.isArray(data.attributes.dateDetails.March) ?
                            data.attributes.dateDetails.March.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.April}
                        {
                          Array.isArray(data.attributes.dateDetails.April) ?
                            data.attributes.dateDetails.April.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.May}
                        {
                          Array.isArray(data.attributes.dateDetails.May) ?
                            data.attributes.dateDetails.May.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.June}
                        {
                          Array.isArray(data.attributes.dateDetails.June) ?
                            data.attributes.dateDetails.June.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                        </td>
                      <td className="description b-detail">{data.attributes.July}
                        {
                          Array.isArray(data.attributes.dateDetails.July) ?
                            data.attributes.dateDetails.July.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.August}
                        {
                          Array.isArray(data.attributes.dateDetails.August) ?
                            data.attributes.dateDetails.August.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.September}
                        {
                          Array.isArray(data.attributes.dateDetails.September) ?
                            data.attributes.dateDetails.September.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.October}
                        {
                          Array.isArray(data.attributes.dateDetails.October) ?
                            data.attributes.dateDetails.October.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.November}
                        {
                          Array.isArray(data.attributes.dateDetails.November) ?
                            data.attributes.dateDetails.November.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description b-detail">{data.attributes.December}
                        {
                          Array.isArray(data.attributes.dateDetails.December) ?
                            data.attributes.dateDetails.December.map((item, index) => (
                              <span className="hover-date" key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                          :
                          data.attributes.time_details
                        }
                      </td>
                      <td className="description">{data.attributes.sick_leave}</td>
                      <td className="description">{data.attributes.marriage_leave}</td>
                      <td className="description">{data.attributes.maternity_leave}</td>
                      <td className="description">{data.attributes.bereavement_leave}</td>
                      <td className="description">{data.attributes.unpaid_leave}</td>
                    </tr>
                  ))
                  :
                  <></>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section >
    );
  }
}

export default ListRegistrantion;