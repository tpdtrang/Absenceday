import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableRoleComponent from '../../shared/admin/TableRoleComponent';
import * as action from '../../../actions/admin';
import { connect } from 'react-redux';
class TableRolePage extends Component {
  componentDidMount() {
    this.props.dispatch(action.requestGetRoleStore())
  }
  render() {
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableRoleComponent data={this.props.data}></TableRoleComponent>
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    data: state.stores.all
  }
}

export default connect(mapPropsToState, null)(TableRolePage);