import React, { Component } from 'react';
import { Modal, DatePicker, message, Select, Form, Input } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var dateFormatDate = require('dateformat');
var now = new Date();
const dateFormat = 'YYYY-MM-DD';
class MenuLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      time_start: dateFormatDate(now, 'yyyy-mm-dd'),
      time_end: dateFormatDate(now, 'yyyy-mm-dd'),
      typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
      lead: this.props.data.length > 0 ? this.props.data[0].id : '',
      mailto: this.props.leadmail.length > 0 ? this.props.leadmail[0].id : '',
      at_time: 'Buổi Sáng',
      note: '',
      type: 'Từ ngày đến hết ngày',
      date: dateFormatDate(now, 'yyyy-mm-dd'),
      checkType: false,
      arrayNew: [],
      arrayLead: [],
      arrayMail: [],
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data && !this.state.lead && this.props.data.length) {
      this.setState({
        typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
        lead: this.props.data[0].id,
      })
    }
    if (this.props.leadmail !== prevProps.leadmail && !this.state.mailto && this.props.leadmail.length) {
      this.setState({
        mailto: this.props.leadmail[0].id,
      })
    }
    
    if (prevProps.visible !== this.props.visible) {
      if (prevProps.edit !== this.props.edit  && this.props.edit) {
        let data = this.props.dataEdit.attributes;
        let arrayNew = data.time.map(item => {
          return {
            id: item.id,
            at_time: item.at_time,
            date: dateFormatDate(item.time_details, 'yyyy-mm-dd'),
          }
        });
        this.setState({
          id: this.props.dataEdit.id,
          visible: this.props.edit,
          time_start: dateFormatDate(data.time[0].time_details, 'yyyy-mm-dd') ,
          time_end: dateFormatDate(data.time[data.time.length - 1].time_details, 'yyyy-mm-dd'),
          checkType: data.time[0].type === 'Chọn ngày' ? true : false,
          note: this.props.edit ? data.note : '',
          type: data.time[0].type === "Chọn ngày" ? "Chọn ngày" : "Từ ngày đến hết ngày",
          typeday: data.type_id,
          arrayNew: data.time[0].type === "Chọn ngày" ? arrayNew : this.state.arrayNew
        })
      } else {
        this.onReset();
        this.setState({
          visible: this.props.visible,
        })
      }
    }
  }
  showModal = () => {
    if (cookies.get('data') !== undefined) {
      this.setState({ visible: true });
    } else {
      message.error("Bạn cần đăng nhập để đăng ký!")
    }
  }
  onChanger = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  onChangeDate = (date, dateString) => {
    this.setState({ time_end: dateString})
  }
  onChangeDateTime = (date,dateString) =>{
    this.setState({  date: dateString })
  }
  onChangeDateItem = (date, dateString) => {
    this.setState({
      time_start: dateString,
    })
  }
  onChangeType = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.value === "Từ ngày đến hết ngày") {
      this.setState({
        checkType: false,
        [name]: value
      })
    } else {
      if (event.target.value === "Chọn ngày") {
        this.setState({
          checkType: true,
          [name]: value
        })
      }
    }
  }
  onCancel = (event) => {
    event.preventDefault();
    this.setState({ visible: false });
    this.props.onCheckModal();
  }
  onChangeCheck = (e) => {
    this.setState({
      checked: e.target.checked,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.edit === true) {
          this.props.onUpdateDay(this.state);
          this.setState({
            visible: false,
            value: ''
          })
          this.props.form.resetFields();
          this.onReset();
        } else {
          this.props.onAddDayOff(this.state);
          this.setState({
            visible: false
          })
          this.props.form.resetFields();
          this.onReset();
        }
      }
    })
  }
  onReset() {
    this.setState({
      visible: false,
      time_start: dateFormatDate(now, 'yyyy-mm-dd'),
      time_end: dateFormatDate(now, 'yyyy-mm-dd'),
      typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
      lead: this.props.data.length > 0 ? this.props.data[0].id : '',
      mailto: this.props.leadmail.length > 0 ? this.props.leadmail[0].id : '',
      at_time: 'Buổi Sáng',
      note: '',
      type: 'Từ ngày đến hết ngày',
      date: dateFormatDate(now, 'yyyy-mm-dd'),
      checkType: false,
      arrayNew: [],
      arrayLead: [],
      arrayMail: [],
    })
  }
  onAddDay = (e) => {
    e.preventDefault();
    let checkAdd = false;
    if (this.state.arrayNew.length > 0) {
      this.state.arrayNew.map(item => {
        if (item.date === this.state.date && item.at_time === this.state.at_time) {
          message.error('Trùng Dữ Liệu')
          checkAdd = false
        } else {
          checkAdd = true
        }
        return [];
      })
    }
    if (this.state.arrayNew.length > 0) {
      if (checkAdd === true) {
        let data = {
          id: this.state.arrayNew.length > 0 ? parseInt(this.state.arrayNew[this.state.arrayNew.length - 1].id + 1) : 1,
          date: this.state.date,
          at_time: this.state.at_time
        }
        let arrayCurrent = this.state.arrayNew;
        arrayCurrent = [...arrayCurrent, data]
        this.setState({
          arrayNew: arrayCurrent
        })
      }
    } else {
      let data = {
        id: this.state.arrayNew.length > 0 ? parseInt(this.state.arrayNew[this.state.arrayNew.length - 1].id + 1) : 1,
        date: this.state.date,
        at_time: this.state.at_time
      }
      let arrayCurrent = this.state.arrayNew;
      arrayCurrent = [...arrayCurrent, data]
      this.setState({
        arrayNew: arrayCurrent
      })
    }
  }
  removeItemTime = (id) => {
    let data = this.state.arrayNew.filter(item => item.id !== id);
    this.setState({
      arrayNew: data
    })
  }
  onChangeDateSearch = (date, dateString) => {
    this.setState({
      day: dateString,
    })
  }
  onViews = () => {
    this.props.onViews();
  }
  onListQueue = () => {
    this.props.onListQueue();
  }
  onDisAccept = () => {
    this.props.onDisAccept();
  }
  onList = () => {
    this.props.onList();
  }
  onStatistical = () => {
    this.props.onStatistical();
  }
  handleChange = arrayLead => {
    this.setState({
      arrayLead
    })
  }
  handleChangeMail = arrayMail => {
    this.setState({
      arrayMail
    })
  }
  onChangeValue = (value) => {
    this.props.form.setFieldsValue({
      note: 'Time',
    });
  }
  render() {
    const contentUser = () => {
      if (cookies.get("data") !== undefined) {
        return (
          <div key={cookies.get("data").id}>
            <div className="b-information">
              <h1 className="b-title">Họ tên:</h1>
              <span className="b-text ">{cookies.get("data").attributes.name}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Quê quán:</h1>
              <span className="b-text ">{cookies.get("data").attributes.address}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Vị trí:</h1>
              <span className="b-text ">{cookies.get("data").attributes.team.name}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Khối:</h1>
              <span className="b-text " key={cookies.get("data").attributes.position.id}>{cookies.get("data").attributes.position.name}</span>
            </div>
          </div>
        )
      }
    }
    const { arrayLead, arrayMail } = this.state;
    const filteredOptions = this.props.data.filter(o => !arrayLead.includes(o));
    let arrayNew = [];
    this.props.leadmail.map(item => {
      if (!arrayLead.includes(item)) {
        arrayNew = [...arrayNew, item]
      }
      return [];
    })
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="b-menu-container">
        <div className="b-menu">
          <button className="btn-list btn-subcribe" onClick={this.showModal}>Đăng ký</button>
          <button className="btn-list active" onClick={this.onListQueue}>DS Được Duyệt</button>
          <button className="btn-list" onClick={this.onViews}>DS Đợi Duyệt</button>
          <button className="btn-list" onClick={this.onDisAccept}>DS Không Duyệt</button>
          <button className="btn-list" onClick={this.onList}>DS Duyệt </button>
          <button className="btn-list" onClick={this.onStatistical}>Thống kê</button>
        </div>
        <Modal
          style={{
            "width": "400px",
            "top": "5px"
          }}
          visible={this.state.visible}
          onOk={this.handleOk}
          footer={null}
          closable={false}>
          <Form onSubmit={this.onSubmit}>
            <div className="b-form-container">
              <div className="b-form-content">
                <div className="b-heading">
                  <h1 className="b-title">
                    Đăng Ký Nghỉ Phép
                </h1>
                </div>
                {contentUser()}
                <div className="b-content">
                  <div className="b-form">
                    <div className="form-group">
                      <label className="b-text ">Loại Hình Nghỉ: </label>
                      <select
                        className="b-select select-1"
                        onChange={this.onChangeType}
                        value={this.state.type}
                        name="type">
                        <option value="Từ ngày đến hết ngày">Từ ngày đến hết ngày</option>
                        <option value="Chọn ngày">Chọn ngày</option>
                      </select>
                    </div>
                    {
                      this.state.checkType ?
                        <></>
                        :
                        <div className="form-date">
                          <div className="form-group">
                            <label className="b-text ">Thời gian bắt đầu:</label>
                            <DatePicker
                              className="ip-date"
                              onChange={this.onChangeDateItem}
                              value={moment(this.state.time_start, dateFormat)}
                              name="time_start"
                              allowClear={false}
                            />
                          </div>
                          <div className="form-group">
                            <label className="b-text ">Thời gian kết thúc:</label>
                            <DatePicker
                              className="ip-date"
                              onChange={this.onChangeDate}
                              value={moment(this.state.time_end, dateFormat)}
                              name="time_end"
                              allowClear={false}
                            />
                          </div>
                        </div>
                    }
                    {
                      this.state.checkType ?
                        <>
                          <div className="form-group sl-form">
                            <label className="sl-text">Thời gian:</label>
                            <DatePicker
                              className="sl-date"
                              onChange={this.onChangeDateTime}
                              defaultValue={moment(now, dateFormat)}
                              allowClear={false}
                              style={{ "width": "120px" }}
                            />
                            <select
                              className="sl-select"
                              onChange={this.onChanger}
                              value={this.state.at_time}
                              name="at_time">
                              <option>Buổi Sáng</option>
                              <option>Buổi Chiều</option>
                              <option>Cả Ngày</option>
                            </select>
                            <button onClick={this.onAddDay} className="btn-plus"><i className="fas fa-plus"></i></button>
                          </div>
                          <div className="listdate">
                            {this.state.arrayNew.map(item => (
                              <div className="item" key={item.id}>
                                <div className="content">
                                  <p className="text-norm">
                                    {item.date}
                                  </p>
                                  <p className="text-norm">
                                    {item.at_time}
                                  </p>
                                </div>
                                <div className="group-button">
                                  <button className="b-btn" onClick={this.removeItemTime.bind(this, item.id)}>
                                    Xóa
                                </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                        :
                        <></>
                    }
                    <div className="form-group">
                      <label className="b-text ">Thể loại:</label>
                      <select
                        className="b-select select-1"
                        onChange={this.onChanger}
                        value={this.state.typeday}
                        name="typeday"
                      >
                        {
                          this.props.typedayoff.map(data => (
                            <option value={data.id} key={data.id}>{data.attributes.name}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <p className="text">Lý do:</p>
                      <Form.Item>
                        {getFieldDecorator('note', {
                          initialValue: this.state.note,
                          rules: [
                            {
                              required: true,
                              message: 'Bạn hãy nhập để gửi thông báo!'
                            },
                            {
                              min: 10,
                              message: 'Bạn hãy nhập hơn 10 ký tự!'
                            },
                          ],
                        })(
                          <Input
                            className="b-area"
                            name="note"
                            onChange={this.onChanger}
                            autoComplete ="off"
                          />,
                        )}
                      </Form.Item>
                    </div>
                    {
                      this.props.edit === false ?
                        <>
                          <div className="form-group">
                            <label className="b-text ">Chọn nguời duyệt:</label>
                          </div>
                          <div className="b-option">
                            <div className="form-group">
                              <label className="b-text ">To:</label>
                            </div>
                            <Select
                              mode="multiple"
                              value={arrayLead}
                              onChange={this.handleChange}
                              className="b-slt"
                            >
                              {filteredOptions.map(item => (
                                <Select.Option key={item} value={item}>
                                  {item}
                                </Select.Option>
                              ))}
                            </Select>
                          </div>
                          <div className="b-option">
                            <div className="form-group">
                              <label className="b-text ">CC:</label>
                            </div>
                            <Select
                              mode="multiple"
                              value={arrayMail}
                              onChange={this.handleChangeMail}
                              className="b-slt"
                            >
                              {arrayNew.map(data => (
                                <Select.Option key={data} value={data}>
                                  {data}
                                </Select.Option>
                              ))}
                            </Select>
                          </div>
                        </>
                        :
                        <></>
                    }
                    <div className="form-group text-center">
                      <button type="submit" className="btn-cancel">{this.props.edit === true ? 'Cập Nhật' : 'Đăng ký'}</button>
                      <button type="cancel" className="btn-submit" onClick={this.onCancel}>Thoát</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal>
      </section>
    );
  }
}

export default Form.create({})(MenuLayout);