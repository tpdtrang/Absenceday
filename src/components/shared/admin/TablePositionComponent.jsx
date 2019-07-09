import React, { Component } from 'react';
import { Modal } from 'antd';
class TablePositionComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      name: '',
      description: ''
    }
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

  onhandleChange = (event) => {
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
    //this.onReset();
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

  onReset = () => {
    this.setState({
      name: '',
      description: ''
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.edit !== prevProps.edit && this.props.edit) {
      this.setState({
        id: this.props.dataEdit.id,
        name: this.props.dataEdit.attributes.name,
        description: this.props.dataEdit.attributes.description
      })
    }
  }
  render() {
    //console.log(this.props.data);
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Quản Lí Vị Trí</h3>
                </div>
              </div>
              <div className="menu-list">
                {/* <div className="search">
                  <a href="/">
                    <input type="text" />
                    <div className="icon">
                      <i className="fas fa-search" />
                    </div>
                  </a>
                </div> */}
              </div>
              <div className="menu-list">
                <div className="add">
                  <button type="submit" className="btn" onClick={this.onhandleShow} style={{ fontSize: "13px", color: "#fff", backgroundColor: " #02a959" }} >
                    <i className="fas fa-plus" style={{ fontSize: "13px", color: "#fff", paddingRight: "5px" }} />
                    Create New
                  </button>
                </div>
              </div>
            </div>
            <div className="p-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.name}</td>
                      <td className="description">{data.attributes.description}</td>
                      <td className="description"><button className="btn" onClick={this.onDelete.bind(this, data.id)}><i className="far fa-trash-alt" style={{color:"red", fontSize:"18px"}}></i></button></td>
                      <td className="description"><button className="btn" onClick={this.onEdit.bind(this, data.id)}><i className="far fa-edit" style={{color:"blue", fontSize:"18px"}}></i></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal visible={this.state.show} footer={null} onCancel={this.onhandleClose} >
              <div className="p-modal">
                <div className="title-form">
                  <h3 className="heading-3">Form Positions</h3>
                </div>
                <hr />
                <div className="p-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label className="form-text">Name:</label>
                      <input type="text" className="form-search" name="name" onChange={this.onhandleChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Description:</label>
                      <input type="text" className="form-search" name="description" onChange={this.onhandleChange} value={this.state.description} />
                    </div>
                    <div className="btn-wrap">
                      <button type="submit" className="btn" variant="primary">
                        Save</button>
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

export default TablePositionComponent;