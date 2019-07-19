import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import Pagination from '../../../../feature/Pagination';
const dateFormat = 'YYYY/MM/DD';
var now = new Date();
var dateFormatDate = require('dateformat');
const { MonthPicker } = DatePicker;
const monthFormat = 'YYYY/MM'
class ListdatetodateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: dateFormatDate(now, 'yyyy-mm-dd'),
      to: dateFormatDate(now, 'yyyy-mm-dd'),
      checksearch: '1',
      month: '',
      year: '',
      pagOfItem: []
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      pagOfItem: pageOfItems
    })
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

  onSubmitMonth = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state);
  }

  onSubmitYear = (event) => {
    event.preventDefault();
    this.props.onSearchYear(this.state);
  }

  onChanger = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeMonth = (date, dateString) => {
    this.setState({
      month: dateString
    })
  }

  onDislicenseDate = () => {
    this.props.onDislicenseDate();
  }

  onLicenseDate = () => {
    this.props.onLicenseDate();
  }

  onhandleSearch = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value === "1") {
      this.setState({
        checksearch: "1",
        [name]: value
      })
    }

    if (value === "2") {
      var month = dateFormatDate(new Date(), 'mm');
      let object = {
        isDate: "Month",
        value: month
      }
      this.props.onFilter(object);
      this.setState({
        checksearch: "2",
        [name]: value
      })
    }

    if (value === "3") {
      var tempYear = new Date();
      var year = tempYear.getFullYear();
      let object = {
        isDate: "Year",
        value: year
      }
      this.props.onFilter(object);
      this.setState({
        checksearch: "3",
        [name]: value
      })
    }
  }

  render() {
    console.log(this.props.data);

    return (
      <div >
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Thống kê theo ngày-tháng-năm</h3>
                </div>
              </div>
              {/* <div className="menu-list">
                <div className="p-absence">
                  <button onClick={this.onLicenseDate} className="btn"><i className="far fa-calendar-check"></i></button>{" "}
                  <button onClick={this.onDislicenseDate} className="btn"><i className="far fa-calendar-times"></i></button>
                </div>

              </div> */}
              <div className="p-search">
                {this.state.checksearch === "1" ?
                  <form className="f-search" onSubmit={this.onSubmit}>
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
                    <button className="btn btn-s" type="submit"><i className="fas fa-search"></i></button>
                  </form>
                  :
                  <></>
                }
                {
                  this.state.checksearch === "2" ?
                    <form className="f-search" onSubmit={this.onSubmitMonth}>
                      {/* <input type="text" className="p-search" name="month" value={this.state.month} onChange={this.onChanger} /> */}
                      <MonthPicker placeholder="Select month" name="month" defaultValue={moment(now, monthFormat)} onChange={this.onChangeMonth} />
                      <button className="btn btn-s" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    :
                    <></>
                }
                {
                  this.state.checksearch === "3" ?
                    <form className="f-search" onSubmit={this.onSubmitYear}>
                      <input type="text" className="p-search" name="year" placeholder="Tìm kiếm theo năm..." value={this.state.year} onChange={this.onChanger} />
                      {/* <DatePicker
                  className="ip-date"
                  onChange={this.onChangeDate}
                  defaultValue={moment(now, dateFormat)}
                  name="from"
                /> */}
                      <button className="btn btn-s" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    :
                    <></>
                }
                <select className="f-search op-search" onChange={this.onhandleSearch} name="search" vulue={this.state.search}>
                  <option value="1">Ngày</option>
                  <option value="2">Tháng</option>
                  <option value="3">Năm</option>
                </select>
              </div>
            </div>
            <div className="p-table">
              <table className="table" id="table-to-excel">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Time_details</th>
                    <th>At_time</th>
                    <th>Absence_day</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pagOfItem.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.user.name}</td>
                      <td className="description">{data.attributes.type.type}</td>
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
              <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ListdatetodateComponent;