import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Modal, DatePicker, Form, Button, Input } from 'antd';
import moment from 'moment';
var dateFormatDate = require('dateformat');
const monthFormat = 'YYYY-MM';
const { MonthPicker } = DatePicker;
var now = new Date();
const dateFormat = 'YYYY-MM-DD';
const cookies = new Cookies();
class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.initialState  = {
      showModal: false,
      message: '',
      day: dateFormatDate(now, 'yyyy-mm-dd'),
      month: dateFormatDate(now,'yyyy-mm'),
      year: '',
      search: '',
      checkSearch: "1",
      id: '',
    };
    this.state = this.initialState ;
  }
  onChangeMonth = (date, dateString) => {
    this.setState({
      month: dateString,
    })
  }
  onClose = (e) => {
    e.preventDefault();
    this.setState({
      showModal: false
    })
    this.onReset();
  }
  onReset = () => {
    this.setState({
      message: ''
    })
  }
  onChangeAccept = (id) => {
    let item = [...this.props.data].filter(item => item.id === id);
    if (item.length > 0) {
      this.setState({ showModal: true })
    }
  }
  onConsider(id) {
    this.onChangeAccept(id);
    this.setState({
      showModal: true,
      id: id
    })
  }
  onAccept = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.id = this.state.id;
        this.props.onAccept(values);
        this.setState({
          showModal: false,
        });
        this.props.form.resetFields()
      }
    })
  }
  onDisAccept = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.id = this.state.id;
        this.props.onDisAccept(values);
        this.setState({
          showModal: false,
        });
        this.props.form.resetFields()
      }
    })
  }
  onSendAccept = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.id = this.state.id;
        this.props.onSendAccept(values);
        this.setState({
          showModal: false,
        });
        this.props.form.resetFields()
      }
    })
    
  }
  onChanger = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }
  onChangeDay = (date, dateString) => {
    this.setState({
      day: dateString,
    })
  }
  onSearchDay = (event) => {
    event.preventDefault();
    this.props.onSearchDay(this.state);
  }
  onSearchMonth = (event) => {
    event.preventDefault();
    this.props.onSearchMonth(this.state);
  }
  onSearchYear = (event) => {
    event.preventDefault();
    this.props.onSearchYear(this.state);
  }
  onChangeSearch = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value === "1") {
      this.setState({
        checkSearch: "1",
        [name]: value
      })
    } else {
      if (value === "2") {
        this.setState({
          checkSearch: "2",
          [name]: value
        })
      } else {
        if (value === "3") {
          this.setState({
            checkSearch: "3",
            [name]: value
          })
        }
      }
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="b-table-container">
        <div className="b-table">
          <div className="b-title">
            <h1 className="title">Danh Sách Cần Duyệt</h1>
          </div>
          <div className="b-select">
            <select className="slt-search" onChange={this.onChangeSearch} name="search" value={this.state.search}>
              <option value="1">Ngày</option>
              <option value="2">Tháng</option>
              <option value="3">Năm</option>
            </select>
            {
              this.state.checkSearch === "1" ?
                <form className="form-search" onSubmit={this.onSearchDay}>
                  <DatePicker
                    onChange={this.onChangeDay}
                    defaultValue={moment(now, dateFormat)}
                    name="day"
                    style={{ "margin": "0 6px" }}
                  ></DatePicker>
                  <button className="btn-search"><i className="fas fa-search" ></i></button>
                </form>
                :
                <></>
            }
            {
              this.state.checkSearch === "2" ?
                <form className="form-search" onSubmit={this.onSearchMonth}>
                  <MonthPicker placeholder="Select month" defaultValue={moment(now, monthFormat)} style={{ "margin": "0 6px" }} onChange={this.onChangeMonth} name="month"></MonthPicker>
                  <button className="btn-search"><i className="fas fa-search" ></i></button>
                </form>
                :
                <></>
            }
            {
              this.state.checkSearch === "3" ?
                <form className="form-search" onSubmit={this.onSearchYear}>
                  <input onChange={this.onChanger} placeholder="Tìm kiếm theo năm..." type="text" value={this.state.year} name="year" className="b-search"></input>
                  <button className="btn-search"><i className="fas fa-search" ></i></button>
                </form>
                :
                <></>
            }
          </div>
          <table className="table table-striped">
            <thead>
              <tr className="title-table">
                <th className="item-table">ID</th>
                <th className="item-table">Người Đăng Ký</th>
                <th className="item-table">TG Đăng ký</th>
                <th className="item-table">Thời gian nghỉ</th>
                <th className="item-table">Loại Hình </th>
                <th className="item-table">Hình Thức</th>
                <th className="item-table">Thể loại</th>
                <th className="item-table">Lý Do</th>
                <th className="item-table">Số Ngày Nghỉ</th>
                <th className="item-table">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {
                cookies.get('data') !== undefined ?
                this
                  .props
                  .data
                  .map(data => (
                    <tr key={data.id}>
                      <td className="name-item">{data.id}</td>
                      <td className="name-item">{data.attributes.user.name}</td>
                      <td className="name-item">{dateFormatDate(data.attributes.created_at, "dd-mm-yyyy HH:MM")}</td>
                      <td className="name-item">
                          {
                            data.attributes.time.map(item => (
                              <p className="list-item1" key={item.id} style={{ "width": "100%" }}>
                                {dateFormatDate(item.time_details, "dd-mm-yyyy HH:MM")}
                              </p>
                            ))
                          }
                        </td>
                        <td className="name-item">
                          {
                            data.attributes.time.map(item => (
                              <p className="list-item1" key={item.id} style={{ "width": "100%" }}>
                                {item.type}
                              </p>
                            ))
                          }
                        </td>
                        <td className="name-item">
                          {
                            data.attributes.time.map(item => (
                              <p className="list-item1" key={item.id} style={{ "width": "100%" }}>
                                {item.at_time}
                              </p>
                            ))
                          }
                        </td>
                      <td className="name-item">{data.attributes.type.name}</td>
                      <td className="name-item">{data.attributes.note}</td>
                      <td className="name-item">{data.attributes.total}</td>
                      <td className="name-item item-1">
                        <button className="btn-edit" onClick={this.onConsider.bind(this, data.id)}>Xem xét</button>
                      </td>
                    </tr>
                  ))
                  :
                  <></>
              }
            </tbody>
          </table>
        </div>
        <Modal
          style={{
            "width": "300px",
            "top": "15%"
          }}
          className="b-modal"
          visible={this.state.showModal}
          onOk={this.handleOk}
          footer={null}
          closable={false}
        >
          <div className="form-accept">
            <h1 className="b-title">Xem xét duyệt</h1>
            <div className="btn-close">
              <button className="b-close" onClick={this.onClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <Form className="b-form" id="reset-form">
              <div className="form-group">
                <p className="b-text">Thông báo :</p>
              </div>
              <Form.Item>
                {getFieldDecorator('message', {
                  initialValue: this.state.message,
                  rules: [
                    { 
                      required: true, 
                      message: 'Bạn hãy nhập để gửi thông báo!' 
                    },
                    {
                      min: 5,
                      message: 'Bạn hãy nhập hơn 5 ký tự!'
                    }
                  ],
                })(
                  <Input className="b-comment" autoComplete="off"/>,
                )}
                <div className="b-btn">
                  <Button className="btn-save" onClick={this.onSendAccept}>Gửi</Button>
                  <Button className="btn-accept" onClick={this.onAccept}>Duyệt</Button>
                  <Button className="btn-disaccept" onClick={this.onDisAccept}>Không duyệt</Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </section>
    );
  }
}
ListComponent = Form.create({})(ListComponent);
export default ListComponent;