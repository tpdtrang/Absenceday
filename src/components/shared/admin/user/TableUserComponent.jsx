import React, { Component } from 'react';

class TableUserComponent extends Component {
 
  onDelete(id) {
    this.props.onDelete(id);
  }
  onEdit(id) {
    this.props.onEdit(id);
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <div className="p-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Position</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Add</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(data => (
              <tr key={data.id}>
                <td className="description">{data.id}</td>
                <td className="description">{data.team}</td>
                <td className="description">{data.position}</td>
                <td className="description">{data.name}</td>
                <td className="description">{data.phone}</td>
                <td className="description">{data.address}</td>
                <td className="description">{data.email}</td>
                <td className="description">{data.pass}</td>
                <td className="description"><button className="btn" onClick={this.onDelete.bind(this, data.id)}>Dealete</button></td>
                <td className="description"><button className="btn" onClick={this.onEdit.bind(this, data.id)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
  }
}

export default TableUserComponent;