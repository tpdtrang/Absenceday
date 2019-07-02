import React, { Component } from 'react'
import Moment from 'react-moment';
class TableRegistrationComponent extends Component {
  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Bảng Đăng Kí</h3>
                </div>
              </div>
              <div className="menu-list">
                <div className="search">
                  <input type="text" />
                  <a href="/">
                    <div className="icon">
                      <i className="fas fa-search" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-table table-wrapper">
              <table className="table p-scrollbar" id="consumption-data">
                <thead className="table-header">
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Note</th>
                    <th>Status</th>
                    <th>Requested</th>
                    <th colSpan="30">Tháng 1</th>
                    <th>At_Time</th>
                    <th>Absence_days</th>
                    <th>Approve</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>
                    </th>
                    <th></th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody className="results">
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.user.email}</td>
                      <td className="description">
                        {data.attributes.type.name}
                      </td>
                      <td className="description">{data.attributes.note}</td>
                      <td className="description">{data.attributes.status}</td>
                      <td className="description">{data.attributes.requested_date}</td>
                      <td colSpan="30">
                        {/* {data.attributes.time.map(item => (
                          <span className="current"
                            key={item.id} >
                            <Moment format="YYYY/MM/DD">
                              {item.time_details}

                            </Moment>
                            <hr />
                          </span>
                        ))} */}
                        {/* <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description">{data.attributes.requested_date}</td> */}
                      </td>
                      <td className="description">
                        {data.attributes.time.map(data => (
                          <span key={data.id}>
                            {data.at_time}
                            <hr />
                          </span>
                        ))}
                      </td>
                      <td className="description">
                        {data.attributes.time.map(data => (
                          <span key={data.id}>
                            {data.absence_days}
                            <hr />
                          </span>
                        ))}
                      </td>
                      <td className="description">{data.attributes.approver_id.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TableRegistrationComponent;