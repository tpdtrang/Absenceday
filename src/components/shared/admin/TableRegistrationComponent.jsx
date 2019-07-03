import React, { Component } from 'react'

class TableRegistrationComponent extends Component {
  onhandleShow = (id) => {
    this.props.onDetails(id);
  }
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
                {/* <div className="search">
                  <input type="text" />
                  <a href="/">
                    <div className="icon">
                      <i className="fas fa-search" />
                    </div>
                  </a>
                </div> */}
              </div>
              {/* <div className="menu-list">
                <div className="add">
                  <button type="submit" className="btn" onClick={this.onhandleShow} style={{ fontSize: "13px", color: "#fff", backgroundColor: " #02a959" }} >
                    Calender
                  </button>
                </div>
              </div> */}
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
                    <th>At_Time</th>
                    <th>Absence_days</th>
                    <th>Approve</th>
                    <th>Details</th>
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
                      <td className="description" onClick={this.onhandleShow.bind(this, data.id)}><button className="btn"><i className="fas fa-calendar-day" style={{ color: "blue", fontSize: "18px" }}></i></button></td>
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