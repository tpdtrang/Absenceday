import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableUserComponent from '../../shared/admin/TableUserComponent';
import * as action from '../../../actions/admin';
import { connect } from 'react-redux';
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      dataEdit: {}
    }
  }
  componentDidMount() {
    this.props.dispatch(action.requestGetUserStore());
    this.props.dispatch(action.requestGetTeam());
    this.props.dispatch(action.requestGetPositionStore());
  }
  onAdd = (data) => {
    this.props.dispatch(action.requestAddUserStore(data));
    this.setState({
      edit: false,
    })
  }
  onDelete = (id) => {
    this.props.dispatch(action.requestDeleteUserStore(id));
  }
  onUpdate = (data) => {
    this.props.dispatch(action.requestUpdateUserStore(data));
    this.setState({
      edit: false,
    })
  }
  onEdit = (id) => {
    let item = [...this.props.user].filter(item => item.id === id)
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
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableUserComponent data={this.props.user} team={this.props.team} position={this.props.position} onAdd={this.onAdd} onDelete={this.onDelete} edit={this.state.edit} dataEdit={this.state.dataEdit} onEdit={this.onEdit} onClose={this.onClose} onUpdate={this.onUpdate}></TableUserComponent>
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    user: state.stores.all,
    team: state.team.all,
    position: state.position.all,
  }
}
export default connect(mapPropsToState, null)(UserPage);