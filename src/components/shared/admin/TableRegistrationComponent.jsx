import React, { Component } from 'react'
// import Moment from 'react-moment';
class TableRegistrationComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      idtem: '',
      isFilter:[]
    }
  }

  onhandleShow = (id) => {
    this.props.onDetails(id);
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event);
  }

  handleShow = (data) => {
    let dataNew = [];
    data.map(item => {
      if (parseInt(item.attributes.team.id) === parseInt(this.props.idtem)) {
        dataNew = [...dataNew, item]
      }
      return item;
    })
    return dataNew;
  }
  render() {
    let sum = 0;
    // let { data } = this.props;
    // console.log(data);
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Quản Lí Đăng Kí</h3>
                </div>
              </div>
              <div className="menu-list">
                <select className="p-tags" name="idtem" onChange={this.onhandleChange} value={this.state.idtem}>
                  <option value="all">ALL</option>
                  {this.props.team.map(data => (
                    <option value={data.id} key={data.id}>{data.attributes.name}</option>
                  ))}

                </select>
              </div>
            </div>
            <div className="p-table table-wrapper">
              <table className="table p-scrollbar" id="consumption-data">
                <thead className="table-header">
                  <tr>
                    <th className="sticky-col first-col">#</th>
                    <th className="sticky-col second-col">User</th>
                    <th>Team</th>
                    <th>Type</th>
                    <th>Note</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>At_Time</th>
                    <th>Absence_days</th>
                    <th>Sum</th>
                    {/* <th>Approve</th> */}
                    <th>Requested</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody className=" results">
                  {this.props.data.map(data => {
                    sum = 0;
                    return (
                      <tr key={data.id}>
                        <td className="description sticky-col first-col">{data.id}</td>
                        <td className="description sticky-col second-col">{data.attributes.user.email}</td>
                        <td className="description ">{data.attributes.user.team}</td>
                        <td className="description ">{data.attributes.type.name}</td>
                        <td className="description">{data.attributes.note}</td>
                        <td className="description">{data.attributes.status}</td>
                        <td className="description">
                          {data.attributes.time.map(data => (
                            <span key={data.id}>
                              {data.time_details}
                              <hr />
                            </span>
                          ))}

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
                        {/* <td className="description">{data.attributes.approver_id.name}</td> */}
                        <td className="description">{data.attributes.requested_date}</td>
                        <td className="description" onClick={this.onhandleShow.bind(this, data.id)}><button className="btn"><i className="fas fa-calendar-day" style={{ color: "blue", fontSize: "18px" }}></i></button></td>
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