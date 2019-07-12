import React, { Component } from 'react';
import { Modal, Button } from 'antd';
class TableRoleComponent extends Component {
  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Table Roles</h3>
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
                  <Button type="submit" className="btn">
                    <i className="fas fa-plus" />
                    ADD
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Display_name</th>
                    <th>Description</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.name}</td>
                      <td className="description">{data.display}</td>
                      <td className="description">{data.description}</td>
                      <td className="description"><button className="btn">Delete</button></td>
                      <td className="description"><button className="btn">Edit</button></td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
            <Modal>
              <div className="p-modal">
                <div className="title-form">
                  <h3 className="heading-3">Form Roles</h3>
                </div>
                <hr />
                <div className="p-content">
                  <form>
                    <div className="form-group">
                      <label className="form-text">Name:</label>
                      <input type="text" className="form-search" /></div>
                    <div className="form-group">
                      <label className="form-text">Display_name:</label>
                      <input type="text" className="form-search" /></div>
                    <div className="form-group">
                      <label className="form-text">Description:</label>
                      <input type="text" className="form-search" /></div>
                    <div className="btn-wrap">
                      <button className="btn" variant="primary">
                        Save Changes</button>
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

export default TableRoleComponent;