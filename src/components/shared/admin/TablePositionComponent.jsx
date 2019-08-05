import React, { Component } from 'react';
import { Modal } from 'antd';
var confirm = Modal.confirm;
class TablePositionComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      name: '',
      description: '',
      dele: false
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
      show: false,
      dele:false
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
    var self = this.props;
    confirm({
      title: 'Bạn chắc chắn muốn xóa?',
      onOk(){
        self.onDelete(id);
      },
      onCancel(){

      }
    })
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
                  <h3 className="heading-3">Quản lí vị trí</h3>
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
                    <th>Tên</th>
                    <th>Mô tả</th>
                    <th>Hoạt động</th>
                  </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description sticky-col first-col">{data.id}</td>
                      <td className="description">{data.attributes.name}</td>
                      <td className="description">{data.attributes.description}</td>
                      <td className="description">
                      <button className="btn" onClick={this.onDelete.bind(this, data.id)}><i className="far fa-trash-alt" style={{ color: "red", fontSize: "18px" }} /></button>
                        <button className="btn" onClick={this.onEdit.bind(this, data.id)}>
                          <i className="far fa-edit" style={{ color: "blue", fontSize: "18px" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal maskClosable={false} visible={this.state.show} footer={null} onCancel={this.onhandleClose} >
              <div className="p-modal">
                <div className="title-form">
                  <h3 className="heading-3">Thêm vị trí</h3>
                </div>
                <hr />
                <div className="p-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label className="form-text">Tên:</label>
                      <input type="text" className="form-search" name="name" onChange={this.onhandleChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Mô tả:</label>
                      <input type="text" className="form-search" name="description" onChange={this.onhandleChange} value={this.state.description} />
                    </div>
                    <div className="btn-wrap">
                      <button type="submit" className="btn btn-s" variant="primary">
                        Lưu</button>
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