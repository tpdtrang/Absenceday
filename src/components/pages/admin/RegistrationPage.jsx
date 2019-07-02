import React, { Component } from 'react';
import TableRegistrationComponent from '../../shared/admin/TableRegistrationComponent';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';

class RegistrationPage extends Component {
  componentDidMount() {
    this.props.dispatch(action.requestGetRegistrationStore());
    this.props.dispatch(action.requestGetUserStore());

  }
  render() {    
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableRegistrationComponent data={this.props.registration} user={this.props.stores}></TableRegistrationComponent>
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    registration: state.registration.all,
    user:state.stores.all
  }
}

export default connect(mapPropsToState, null)(RegistrationPage);