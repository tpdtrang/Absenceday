import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TablePositionComponent from '../../shared/admin/TablePositionComponent';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';

class PositionPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edit: false,
      dataEdit: {}
    }
  }
  componentDidMount() {
    this.props.dispatch(action.requestGetPositionStore())
  }
  onAdd = (data) => {
    this.props.dispatch(action.requestAddPositionStore(data))
    this.setState({
      edit: false
    })
  }
  onDelete = (id) => {
    this.props.dispatch(action.requestDeletePositionStore(id))
  }
  onUpdate = (data) => {
    this.props.dispatch(action.requestUpdatePositionStore(data))
  }
  onEdit = (id) => {
    let item = [...this.props.data].filter(item => item.id === id)
    console.log(item);
    if (item.length > 0) {
      this.setState({
        id: id,
        edit: true,
        dataEdit: item[0]
      })
    }
  }
  onClose = () => {
    this.setState({
      edit: false
    })
  }
  render() {
    return (
      <div>
        <HeaderAdLayout />
        <div className="content">
          <SideAdLayout />
          <TablePositionComponent
            data={this.props.data}
            onAdd={this.onAdd}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            edit={this.state.edit}
            dataEdit={this.state.dataEdit}
            onUpdate={this.onUpdate}
            onClose={this.onClose}
          />
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    data: state.position.all
  }
}
export default connect(mapPropsToState, null)(PositionPage);