import React, { Component } from 'react';
import { Modal } from 'antd';
import Pagination from '../../../feature/Pagination';
const confirm = Modal.confirm;
class TableTeamComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.cancelRef = React.createRef();
    this.state = { showDialog: false };
    this.open = () => this.setState({ showDialog: true });
    this.close = () => this.setState({ showDialog: false });
    this.state = {
      show: false,
      name: '',
      description: '',
      pagOfItem: [],
      dele: false

    }
  }

  openDele = () => {
    this.setState({
      dele: true
    })
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      pagOfItem: pageOfItems
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
      show: false,
      dele: false
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
      this.setState({
        show: false
      })
    } else {
      this.props.onAdd(this.state);
      this.onReset();
      this.setState({
        show: false
      })
    }

  }
  onReset = () => {
    this.setState({
      name: '',
      description: ''
    })
  }
  onDelete(id) {
    var self = this.props;
    confirm({
      title: 'Bạn chắc chắn muốn xóa?',
      onOk() {
        self.onDelete(id);
      },
      onCancel() {

      }
    })

  }
  onEdit(id) {
    this.props.onEdit(id);
    this.setState({
      show: true
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.edit !== this.props.edit && this.props.edit) {
      this.setState({
        id: this.props.dataEdit.id,
        name: this.props.dataEdit.attributes.name,
        description: this.props.dataEdit.attributes.description
      })
    }
  }

  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Quản lý nhóm</h3>
                </div>
              </div>
              <div className="menu-list">
              </div>
              <div className="menu-list">
                <div className="add">
                  <button
                    type="submit"
                    className="btn"
                    onClick={this.onhandleShow}
                    style={{ fontSize: "13px", color: "#fff", backgroundColor: " #02a959" }} >
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
                <tbody style={{ textAlign: 'center' }}>
                  {this.state.pagOfItem.map(data => (
                    <tr key={data.id}>
                      <td className="description sticky-col first-col">{data.id}</td>
                      <td className="description">{data.attributes.name}</td>
                      <td className="description">{data.attributes.description}</td>
                      <td className="description">
                        <button
                          className="btn"
                          onClick={this.onDelete.bind(this, data.id)}>
                          <i className="far fa-trash-alt" style={{ color: "red", fontSize: "18px" }} />
                        </button>
                        <button
                          className="btn btn-confirm"
                          onClick={this.onEdit.bind(this, data.id)}>
                          <i className="far fa-edit" style={{ color: "blue", fontSize: "18px" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                items={this.props.data}
                onChangePage={this.onChangePage}>
              </Pagination>
            </div>
            <Modal
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
                      <input type="text"
                        className="form-search"
                        name="name"
                        onChange={this.onhandleChange}
                        value={this.state.name} />
                    </div>
                    <div className="form-group">
                      <label className="form-text">Mô tả:</label>
                      <input type="text"
                        className="form-search"
                        name="description"
                        onChange={this.onhandleChange}
                        value={this.state.description} />
                    </div>
                    <div className="btn-wrap">
                      <button
                        type="submit"
                        className="btn btn-s">
                        Lưu
                        </button>
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

export default TableTeamComponent;