import React, { Component } from 'react'
// import Moment from 'react-moment';
// import {Table} from 'antd';

class TableRegistrationComponent extends Component {
  render() {
    let sum=0;
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
                    <th rowSpan="2">#</th>
                    <th rowSpan="2">User</th>
                    <th rowSpan="2">Type</th>
                    <th rowSpan="2">Note</th>
                    <th rowSpan="2">Status</th>
                    <th rowSpan="2">Requested</th>
                    <th colSpan="30">Tháng 1</th>
                    <th rowSpan="2">At_Time</th>
                    <th rowSpan="2">Absence_days</th>
                    <th rowSpan="2">Sum</th>
                    <th rowSpan="2">Approve</th>
                  </tr>
                  <tr>
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
                  </tr>
                </thead>
                <tbody className="results">
                  {this.props.data.map(data => {
                     sum = 0;
                     return (
                      <tr key={data.id}>
                      <td className="description consumption">{data.id}</td>
                      <td className="description">{data.attributes.user.email}</td>
                      <td className="description ">
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

                        {data.attributes.time.map(item => {
                          sum += parseFloat(item.absence_days)
                          
                          return (
                            <span key={item.id}>
                              {item.absence_days}
                              <hr />
                            </span>
                          )
                        })}
                      </td>
                      <td className="description">{sum}</td>
                      <td className="description">{data.attributes.approver_id.name}</td>
                    </tr>
                     )
                    
                  })}
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