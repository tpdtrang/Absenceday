import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
var now = new Date();
var dateFormatDate = require('dateformat');
class ListdatetodateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: dateFormatDate(now, 'yyyy-mm-dd'),
      to: dateFormatDate(now, 'yyyy-mm-dd'),
    }
  }
  onChangeDate = (date, dateString) => {
    this.setState({ from: dateString })
  }
  onChangeDateItem = (date, dateString) => {
    this.setState({
      to: dateString,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchDate(this.state);
  }

  render() {
    return (
      <div >
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Từ ngày đến ngày</h3>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <DatePicker
                  className="ip-date"
                  onChange={this.onChangeDate}
                  defaultValue={moment(now, dateFormat)}
                  name="from"
                />
                <DatePicker
                  className="ip-date"
                  onChange={this.onChangeDateItem}
                  defaultValue={moment(now, dateFormat)}
                  name="to"
                />
                <button  className="btn btn-s" type="submit">search</button>
              </form>
            </div>

            <div className="p-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Time_details</th>
                    <th>At_time</th>
                    <th>Absence_day</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.type}</td>
                      <td className="description">
                        {
                          Array.isArray(data.attributes.time_details) ?
                            data.attributes.time_details.map((item, index) => (
                              <span key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                            :
                            data.attributes.time_details
                        }
                      </td>
                      <td className="description">
                        {
                          Array.isArray(data.attributes.at_time) ?
                            data.attributes.at_time.map((item, index) => (
                              <span key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                            :
                            data.attributes.at_time
                        }
                      </td>
                      <td className="description">{data.attributes.absence_days}</td>
                      <td className="description">{data.attributes.current_year}</td>
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

export default ListdatetodateComponent;