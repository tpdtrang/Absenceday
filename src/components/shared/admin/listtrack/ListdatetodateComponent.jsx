import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import * as actionYear from '../../../../actions/admindate';
import { connect } from 'react-redux';
const dateFormat = 'YYYY/MM/DD';
var now = new Date();
var dateFormatDate = require('dateformat');
const { MonthPicker, WeekPicker } = DatePicker;
const monthFormat = 'YYYY/MM';
class ListdatetodateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: dateFormatDate(now, 'yyyy-mm-dd'),
      to: dateFormatDate(now, 'yyyy-mm-dd'),
      checksearch: '1',
      month: '',
      year: '',
      week: dateFormatDate(now, 'yyyy-mm-dd'),
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
    this.props.onSearchDate(this.state)
  }

  onSubmitMonth = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state)
  }

  onSubmitYear = (event) => {
    event.preventDefault();
    this.props.onSearchYear(this.state)
  }

  onSubmitWeek = (event) => {
    event.preventDefault();
    this.props.onSearchWeek(this.state)
  }

  onChanger = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      type: 'year'
    })
  }

  onChangeMonth = (date, dateString) => {
    this.setState({
      month: dateString,
      type: 'month'
    })
  }

  onChangeWeek = (dataString) => {
    console.log(dataString);
    this.setState({
      week: dateFormatDate(dataString, 'yyyy-mm-dd'),
      type: 'week'
    })

  }
  // convert = (date) => {
  //   let curr = new Date(date)
  //   let week = []
  //   for (let i = 1; i <= 7; i++) {
  //     let first = curr.getDate() - curr.getDay() + i
  //     let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  //     week.push(day)

  //   }
  //   return week;
  // }

  onDislicenseDate = () => {
    this.props.dispatch(actionYear.requestGetDisLicense(this.state))
  }

  onLicenseDate = () => {
    this.props.dispatch(actionYear.requestGetLicense(this.state))
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
      this.setState({
        checksearch: "2",
        [name]: value
      })
      // let week = new Date();
      // let object = {
      //   week: dateFormatDate(week)
      // }
      // this.props.dispatch(actionYear.requestSearchWeek(object));
    }

    if (value === "3") {
      var month = dateFormatDate(new Date(), 'mm')
      let object = {
        isDate: "Month",
        value: month
      }
      this.props.onFilter(object);
      this.setState({
        checksearch: "3",
        [name]: value
      })
    }

    if (value === "4") {
      var tempYear = new Date();
      var year = tempYear.getFullYear()
      let object = {
        isDate: "Year",
        value: year
      }
      this.props.onFilter(object);
      this.setState({
        checksearch: "4",
        [name]: value
      })
    }
  }
  render() {
    console.log(this.props.data)
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
              <div className="menu-list">
                <div className="p-absence">
                  <button onClick={this.onLicenseDate} className="btn">
                    <i className="far fa-calendar-check" />
                  </button>{" "}
                  <button onClick={this.onDislicenseDate} className="btn">
                    <i className="far fa-calendar-times" />
                  </button>
                </div>

              </div>
              <div className="p-search">
                {this.state.checksearch === "1" ?
                  <form className="f-search" onSubmit={this.onSubmit}>
                    <DatePicker
                      placeholder="Từ ngày"
                      className="ip-date"
                      onChange={this.onChangeDate}
                      defaultValue={moment(now, dateFormat)}
                      name="from"
                    />
                    <DatePicker
                      placeholder="đến ngày"
                      className="ip-date"
                      onChange={this.onChangeDateItem}
                      defaultValue={moment(now, dateFormat)}
                      name="to"
                    />
                    <button className="btn btn-s" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                  :
                  <React.Fragment />
                }
                {
                  this.state.checksearch === "2" ?
                    <form className="f-search" onSubmit={this.onSubmitWeek}>
                      <WeekPicker
                        placeholder="Select Week"
                        name="week"
                        onChange={this.onChangeWeek}
                        defaultValue={moment(now, monthFormat)}
                      />
                      <button className="btn btn-s" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    :
                    <React.Fragment />
                }
                {
                  this.state.checksearch === "3" ?
                    <form className="f-search" onSubmit={this.onSubmitMonth}>
                      {/* <input type="text" className="p-search" name="month" value={this.state.month} onChange={this.onChanger} /> */}
                      <MonthPicker
                        placeholder="Select month"
                        name="month"
                        defaultValue={moment(now, monthFormat)}
                        onChange={this.onChangeMonth} />
                      <button className="btn btn-s" type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                    :
                    <React.Fragment />
                }
                {
                  this.state.checksearch === "4" ?
                    <form className="f-search" onSubmit={this.onSubmitYear}>
                      <input
                        type="text"
                        className="p-search"
                        name="year"
                        placeholder="Tìm kiếm theo năm..."
                        value={this.state.year}
                        onChange={this.onChanger} />
                      <button className="btn btn-s" type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                    :
                    <React.Fragment />
                }
                <select
                  className="f-search op-search"
                  onChange={this.onhandleSearch}
                  name="search"
                  vulue={this.state.search}>
                  <option value="1">Ngày</option>
                  <option value="2">Tuần</option>
                  <option value="3">Tháng</option>
                  <option value="4">Năm</option>
                </select>
              </div>
            </div>
            <div className="p-table">
              <table className="table" id="table-to-excel">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Người dùng</th>
                    <th>Lí do</th>
                    <th>Thời gian nghỉ</th>
                    <th>Buổi</th>
                    <th>Tổng</th>
                    {/* <th>Năm</th> */}
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
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
                      {/* <td className="description">{data.attributes.current_year}</td> */}
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
function mapStateToProps(state) {
  return {
    list: state.searchdate.list
  }
}

export default connect(mapStateToProps, null)(ListdatetodateComponent);