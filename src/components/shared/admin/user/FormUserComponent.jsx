import { Button, Modal } from 'antd';
import React, { Component } from 'react';

class FormUserComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      team: '',
      position: '',
      name: '',
      phone: '',
      address: '',
      email: '',
      pass: '',
      showFE: false
    }
  }
  onhandlChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
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
  }
  onReset() {
    this.setState({
      team: '',
      position: '',
      name: '',
      phone: '',
      address: '',
      email: '',
      pass: ''
    })
  }
  onhandleShow = () => {
    this.setState({
      show: true
    })
  }
  onhandleClose = (e) => {
    e.preventDefault();
    this.props.onClose();
    this.onReset();
    this.setState({
      show: false
    })

  }
  // onDelete(id) {
  //     this.props.onDelete(id);
  // }
  // onEdit(id) {
  //     this.props.onEdit(id);
  //     this.setState({
  //         show: true
  //     })
  // }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit !== prevProps.edit && this.props.edit) {
      this.setState({
        id: this.props.dataEdit.id,
        team: this.props.dataEdit.team,
        position: this.props.dataEdit.position,
        name: this.props.dataEdit.name,
        phone: this.props.dataEdit.phone,
        address: this.props.dataEdit.address,
        email: this.props.dataEdit.email,
        pass: this.props.dataEdit.pass,
      })
    }
  }
  onFrontEnd = () => {
    this.props.onViews();
  }
  onBackEnd = () => {
    this.props.onViewBE();
  }
  render() {
    return (
      <>
        <div className="p-title">
          <div className="menu-list">
            <div className="title">
              <h3 className="heading-3">Table User</h3>
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
          <div className="menu-list">
            <div className="add">
              <Button type="submit" className="btn" onClick={this.onhandleShow} >
                <i className="fas fa-plus" />
                ADD
                  </Button>
            </div>
          </div>
        </div>

        <div className="menulayout">
          <div className="p-menu">
            <button className="btn" onClick={this.onFrontEnd}>Frontend</button>
          </div>
          <div className="p-menu">
            <button className="btn" onClick={this.onBackEnd}>Backend</button>
          </div>
          <div className="p-menu">
            <button className="btn">Solution</button>
          </div>
          <div className="p-menu">
            <button className="btn">Tester</button>
          </div>
        </div>
        <Modal visible={this.state.show} style={{ "top": "3%" }} footer={null} onCancel={this.onhandleClose}>
          <div className="p-modal">
            <div className="title-form">
              <h3 className="heading-3">Form User</h3>
            </div>
            <hr />
            <div className="p-content">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="form-text">Team:</label>
                  <input type="text" className="form-search" name="team" onChange={this.onhandlChange} value={this.state.team} />
                </div>
                <div className="form-group">
                  <label className="form-text">Position:</label>
                  <input type="text" className="form-search" name="position" onChange={this.onhandlChange} value={this.state.position} />
                </div>
                <div className="form-group">
                  <label className="form-text">Name:</label>
                  <input type="text" className="form-search" name="name" onChange={this.onhandlChange} value={this.state.name} />
                </div>
                <div className="form-group">
                  <label className="form-text">Phone:</label>
                  <input type="text" className="form-search" name="phone" onChange={this.onhandlChange} value={this.state.phone} />
                </div>
                <div className="form-group">
                  <label className="form-text">Address:</label>
                  <input type="text" className="form-search" name="address" onChange={this.onhandlChange} value={this.state.address} />
                </div>
                <div className="form-group">
                  <label className="form-text">Email:</label>
                  <input type="text" className="form-search" name="email" onChange={this.onhandlChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label className="form-text">Password:</label>
                  <input type="text" className="form-search" name="pass" onChange={this.onhandlChange} value={this.state.pass} />
                </div>
                <div className="btn-wrap">
                  <button type="submit" className="btn" variant="primary">
                    Save </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default FormUserComponent;