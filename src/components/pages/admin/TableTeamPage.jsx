import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableTeamComponent from '../../shared/admin/TableTeamComponent';
import * as action from '../../../actions/admin';
import { connect } from 'react-redux'

class TableTeamPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edit: false,
      dataEdit: {}
    }
  }
  componentDidMount() {
    this.props.dispatch(action.requestGetTeamStore());
  }
  onAdd = (data) => {
    this.props.dispatch(action.requestAddTeamStore(data));
    this.setState({
      edit: false
    })
  }
  onDelete = (id) => {
    this.props.dispatch(action.requestDeleteTeamStore(id));
  }
  onUpdate = (data) => {
    this.props.dispatch(action.requestUpdateTeamStore(data));
    this.setState({
      edit: false
    })
  }
  onEdit = (id) => {  
    let item = [...this.props.data].filter(item => item.id === id)
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
          <TableTeamComponent data={this.props.data} onAdd={this.onAdd} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate} edit={this.state.edit} onDelete={this.onDelete} onEdit={this.onEdit} onClose={this.onClose}></TableTeamComponent>
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    data: state.team.all
  }
}
export default connect(mapPropsToState, null)(TableTeamPage);