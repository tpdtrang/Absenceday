import React, { Component } from 'react';
import TableRegistrationComponent from '../../shared/admin/TableRegistrationComponent';
import { CalenderComponent } from '../../shared/admin';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';
var dateFormat = require('dateformat');

class RegistrationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      views: 'TABLE'
    }
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetRegistrationStore());
    this.props.dispatch(action.requestGetUserStore());

  }
  onhandleShow = (views) => {
    this.setState({
      views: views
    })

  }
  onDetails = (id) => {
    this.setState({
      views: "CALENDER"
    })
    this.props.dispatch(action.requestFilterRegister(id));
  }
  covertDataToCalender(data) {

    if (data.length > 0) {
      return data.map(item => {
        return {
          id: item.id,
          title: item.attributes.type.name,
          date: dateFormat(item.attributes.approved_date, 'yyyy-mm-dd'),
          email:item.attributes.user.name
        }
      })
    } else {
      return [];
    }
  }
  render() {
    const mainContent = () => {
      switch (this.state.views) {
        case "CALENDER":
          return (
            <CalenderComponent data={this.covertDataToCalender(this.props.filter)} onhandleShow={this.onhandleShow} ></CalenderComponent>
          )
        case "TABLE":
          return (
            <TableRegistrationComponent onDetails={this.onDetails} onhandleShow={this.onhandleShow} data={this.props.registration} user={this.props.stores}></TableRegistrationComponent>
          )
        default:
          return (<></>)
      }
    }
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          {mainContent()}
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    registration: state.registration.all,
    user: state.stores.all,
    filter: state.registration.filter
  }
}

export default connect(mapPropsToState, null)(RegistrationPage);