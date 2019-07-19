import React, { Component } from 'react';
import { Modal, DatePicker } from 'antd';
import moment from 'moment'
var now = new Date();
const dateFormat = 'YYYY-MM-DD';

class TableUserComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      team_id: this.props.team.length > 0 ? this.props.team[0].id : '',
      position_id: this.props.position.length > 0 ? this.props.position[0].id : '',
      name: '',
      phone: '',
      address: '',
      email: '',
      first_workday: '',
      // role: '',
      // users: [],
      // categories: {},
      // idtem: '',
      isFilter: false,
      dele: false
    }
  }
  onhandleShow = () => {
    this.setState({
      show: true
    })
  }

  openDele = () => {
    this.setState({
      dele: true
    })
  }

  onhandleClose = (e) => {
    e.preventDefault();
    this.props.onClose();
    this.onReset();
    this.setState({
      show: false,
      dele: false
    })
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onhandleChangeFilter = (event) => {
    if (event.target.value === 'all') {
      this.setState({
        isFilter: false
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        isFilter: true
      })
    }
  }
  // listData = (listData) => {
  //   if (listData !== null && listData.length > 0) {
  //     listData.map((data) => {
  //       if (data && data.categories.length > 0) {
  //         let categories = data.categories;
  //         this.compareData(categories, data);
  //       }
  //       return data;
  //     })
  //   }
  // }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.props.edit) {
      this.props.onUpdate(this.state);
      this.onReset();
    } else {
      this.props.onAdd(this.state);
      this.onReset();
    }
    this.setState({
      show: false
    })
    this.onReset();
  }

  onReset() {
    this.setState({
      team_id: this.props.team.length ? this.props.team[0].id : '',
      position_id: this.props.position.length ? this.props.position[0].id : '',
      name: '',
      phone: '',
      address: '',
      email: '',
      first_workday: '',
    })
  }

  onDelete(id) {
    this.props.onDelete(id);
  }

  onEdit(id) {
    this.props.onEdit(id);
    this.setState({
      show: true
    })
  }

  onChangeDate = (date, dateString) => {
    this.setState({
      first_workday: dateString
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit !== prevProps.edit && this.props.edit) {
      this.setState(
        {
          id: this.props.dataEdit.id,
          name: this.props.dataEdit.attributes.name,
          team_id: this.props.dataEdit.attributes.team.name,
          position_id: this.props.dataEdit.attributes.position.name,
          phone: this.props.dataEdit.attributes.phone,
          email: this.props.dataEdit.attributes.email,
          address: this.props.dataEdit.attributes.address,
          first_workday: this.props.dataEdit.attributes.first_workday,
          // role: this.props.dataEdit.attributes.roles
        }
      )
    }
  }

  handleShow = (data) => {
    let dataNew = [];
    data.map(item => {
      if (parseInt(item.attributes.team.id) === parseInt(this.state.idtem)) {
        dataNew = [...dataNew, item]
      }
      return item;
    })
    return dataNew;
  }

  render() {
    this.handleShow(this.props.data)
    var divStype = {
      fontSize: "13px",
      color: "#fff",
      paddingRight: "5px"
    }

    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Quản lí người dùng</h3>
                </div>
              </div>
              <div className="menu-list">
                <div className="search">
                  <select className="p-tags" name="idtem" onChange={this.onhandleChangeFilter} value={this.state.select}>
                    <option value="all">All</option>
                    {this.props.team.map(data => (
                      <option value={data.id} key={data.id}>{data.attributes.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="menu-list">
                <div className="add">
                  <button type="submit" className="btn" onClick={this.onhandleShow}
                    style={{ fontSize: "13px", color: "#fff", backgroundColor: " #02a959" }} >
                    <i className="fas fa-plus" style={divStype} />
                    Create New
                  </button>
                </div>
              </div>
            </div>
            <div className="p-table">
              <table className="table p-scrollbar">
                <thead>
                  <tr>
                    <th className="first-col">#</th>
                    <th>Nhóm</th>
                    <th>Vị trí</th>
                    <th>Tên</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Ngày đi làm đầu tiên</th>
                    {/* <th>Vị trí</th> */}
                    <th>Hoạt động</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.isFilter ?
                      this.handleShow(this.props.data).map(data => (
                        <tr key={data.id}>
                          <td className="description first-col">{data.id}</td>
                          <td className="description">{data.attributes.team.name}</td>
                          <td className="description">{data.attributes.position.name}</td>
                          <td className="description">{data.attributes.name}</td>
                          <td className="description">{data.attributes.phone}</td>
                          <td className="description">{data.attributes.address}</td>
                          <td className="description">{data.attributes.email}</td>
                          <td className="description">{data.attributes.first_workday}</td>
                          {/* <td className="description">{data.attributes.roles}</td> */}
                          <td className="description">
                            <button className="btn" type="submit" onClick={this.openDele} >
                              <i className="far fa-trash-alt" style={{ color: "red", fontSize: "18px" }} /></button>
                            <Modal style={{ textAlign: "center" }} maskClosable={false}
                              visible={this.state.dele} onCancel={this.onhandleClose} footer={null} >
                              <p>Bạn có muốn xóa?</p>
                              <button className="btn btn-primary" onClick={this.onDelete.bind(this, data.id)}>Yes</button>{"   "}
                              <button className="btn btn-danger" onClick={this.onhandleClose}>No</button>
                            </Modal>
                            <button className="btn" onClick={this.onEdit.bind(this, data.id)}>
                              <i className="far fa-edit" style={{ color: "blue", fontSize: "18px" }} />
                            </button>
                          </td>
                        </tr>
                      ))
                      :
                      this.props.data.map(data => (
                        <tr key={data.id}>
                          <td className="description first-col">{data.id}</td>
                          <td className="description">{data.attributes.team.name}</td>
                          <td className="description">{data.attributes.position.name}</td>
                          <td className="description">{data.attributes.name}</td>
                          <td className="description">{data.attributes.phone}</td>
                          <td className="description">{data.attributes.address}</td>
                          <td className="description">{data.attributes.email}</td>
                          <td className="description">{data.attributes.first_workday}</td>
                          {/* <td className="description">{data.attributes.roles}</td> */}
                          <td className="description">
                            <button className="btn" type="submit" onClick={this.openDele} >
                              <i className="far fa-trash-alt" style={{ color: "red", fontSize: "18px" }} /></button>
                            <Modal style={{ textAlign: "center" }} maskClosable={false}
                              visible={this.state.dele} onCancel={this.onhandleClose} footer={null} >
                              <p>Bạn có muốn xóa?</p>
                              <button className="btn btn-primary" onClick={this.onDelete.bind(this, data.id)}>Yes</button>{"   "}
                              <button className="btn btn-danger" onClick={this.onhandleClose}>No</button>
                            </Modal>
                            <button className="btn" onClick={this.onEdit.bind(this, data.id)}>
                              <i className="far fa-edit" style={{ color: "blue", fontSize: "18px" }} />
                            </button>
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
            <Modal maskClosable={false} visible={this.state.show} style={{ "top": "3%" }} footer={null} onCancel={this.onhandleClose}>
              <div className="p-modal">
                <div className="title-form">
                  <h3 className="heading-3">Thêm người dùng</h3>
                </div>
                <hr />
                <div className="p-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label className="form-text">Nhóm:</label>
                      <select className="op-team" onChange={this.onhandleChange} value={this.state.team_id} name="team_id">
                        {
                          this.props.team.map(data => (
                            <option value={data.id} key={data.id}>{data.attributes.name}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-text">Vị trí:</label>
                      <select className="op-team" onChange={this.onhandleChange} value={this.state.position_id} name="position_id">
                        {
                          this.props.position.map(data => (
                            <option value={data.id} key={data.id}>{data.attributes.name}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-text">Tên:</label>
                      <input type="text" className="form-search" name="name"
                        onChange={this.onhandleChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Sđt:</label>
                      <input type="text" className="form-search" name="phone"
                        onChange={this.onhandleChange} value={this.state.phone} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Địa chỉ:</label>
                      <input type="text" className="form-search" name="address"
                        onChange={this.onhandleChange} value={this.state.address} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Email:</label>
                      <input type="text" className="form-search" name="email"
                        onChange={this.onhandleChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Ngày đầu làm việc:</label>
                      <DatePicker
                        style={{ "width": "100%" }}
                        onChange={this.onChangeDate}
                        defaultValue={moment(now, dateFormat)}>
                      </DatePicker>
                    </div>
                    {/* <div className="form-group">
                      <label className="form-text">Vị trí:</label>
                      <input type="text" className="form-search" name="role" onChange={this.onhandleChange} value={this.state.role} />
                    </div> */}
                    <div className="btn-wrap">
                      <button type="submit" className="btn btn-s" variant="primary"> Lưu </button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </section>
      </div>
    );
  }
}

export default TableUserComponent;