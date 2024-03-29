import React, { Component } from 'react';
import { Tooltip } from 'antd';
class TableTrackComponent extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      name: '',
      description: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      show: false
    })
  }

  onPrev = () => {
    this.props.onPrev()
  }

  onDislicense = () => {
    this.props.onDislicense()
  }

  onLicense = () => {
    this.props.onLicense()
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
            <div className="menu-list">
              <div className="p-absence">
                <button onClick={this.onPrev} className="btn"><i className="fas fa-arrow-circle-left"></i></button>{" "}
                <button onClick={this.onLicense} className="btn"><i className="far fa-calendar-check"></i></button>{" "}
                <button onClick={this.onDislicense} className="btn"><i className="far fa-calendar-times"></i></button>
              </div>

            </div>

          </div>
          <div className="p-table table-wrapper">
            <table className="table p-scrollbar" id="table-to-excel">
              <thead>
                <tr>
                  <th rowSpan="2" className="sticky-col first-col">#</th>
                  {/* <th>Team</th> */}
                  <th rowSpan="2" className="sticky-col second-col">Người dùng</th>
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
              <tbody style={{ textAlign: 'center' }}>
                {this.props.data.map(data => (
                  <tr key={data.id}>
                    <td className="description-date sticky-col first-col">{data.id}</td>
                    {/* <td className="description">{data.attributes.team}</td> */}
                    <td className="description-date sticky-col second-col">{data.attributes.user.email}</td>
                    <td className="description-date">{data.attributes.year}</td>
                    <td className="description-date">{data.attributes.annual_leave_total}</td>
                    <td className="description-date">{data.attributes.annual_leave_unused}</td>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.January) ?
                        data.attributes.dateDetails.January.map((item, index) => (
                          <span className="hover-date " key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.January}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.February) ?
                        data.attributes.dateDetails.February.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.February}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.March) ?
                        data.attributes.dateDetails.March.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.March}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.April) ?
                        data.attributes.dateDetails.April.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.April}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.May) ?
                        data.attributes.dateDetails.May.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.May}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.June) ?
                        data.attributes.dateDetails.June.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.June}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.July) ?
                        data.attributes.dateDetails.July.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.July}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.August) ?
                        data.attributes.dateDetails.August.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.August}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.September) ?
                        data.attributes.dateDetails.September.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.September}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.October) ?
                        data.attributes.dateDetails.October.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.October}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.November) ?
                        data.attributes.dateDetails.November.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.November}</td>
                    </Tooltip>
                    <Tooltip title={
                      Array.isArray(data.attributes.dateDetails.December) ?
                        data.attributes.dateDetails.December.map((item, index) => (
                          <span className="hover-date" key={index} style={{ display: 'block', padding: '3px 0' }}>
                            {item}
                          </span>
                        ))
                        :
                        data.attributes.time_details
                    }
                      arrowPointAtCenter>
                      <td className="description-date">{data.attributes.December}</td>
                    </Tooltip>
                    <td className="description-date">{data.attributes.sick_leave}</td>
                    <td className="description-date">{data.attributes.marriage_leave}</td>
                    <td className="description-date">{data.attributes.maternity_leave}</td>
                    <td className="description-date">{data.attributes.bereavement_leave}</td>
                    <td className="description-date">{data.attributes.unpaid_leave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <Modal
            maskClosable={false}
            visible={this.state.show}
            style={{ "top": "3%" }}
            footer={null}
            onCancel={this.onhandleClose}>
            <div className="p-modal">
              <div className="title-form">
                <h3 className="heading-3">Thêm nhóm</h3>
              </div>
              <hr />
              <div className="p-content">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label className="form-text">Tên:</label>
                    <input
                      type="text"
                      className="form-search"
                      name="name"
                      onChange={this.onhandleChange}
                      value={this.state.name} />
                  </div>
                  <div className="form-group">
                    <label className="form-text">Mô tả:</label>
                    <input
                      type="text"
                      className="form-search"
                      name="description"
                      onChange={this.onhandleChange}
                      value={this.state.description} />
                  </div>
                  <div className="btn-wrap">
                    <button type="submit" className="btn btn-s">
                      Lưu </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal> */}
        </div>
      </section >
    );
  }
}

export default TableTrackComponent;