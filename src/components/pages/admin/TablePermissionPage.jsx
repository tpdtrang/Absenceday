import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TablePermissionComponent from '../../shared/admin/TablePermissionComponent';
import * as action from '../../../actions/admin';
import {connect} from 'react-redux';
class TablePermissionPage extends Component {
  componentDidMount(){
    this.props.dispatch(action.requestGetPermissionStore());
  }
  render() {
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TablePermissionComponent data={this.state.data}></TablePermissionComponent>
        </div>

      </div>
    );
  }
}
function mapPropsToState(state){
  return {
    data:state.stores.all
  }
}

export default connect(mapPropsToState,null)  (TablePermissionPage);