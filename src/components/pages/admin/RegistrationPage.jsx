import React, { Component } from 'react';
import TableRegistrationComponent from '../../shared/admin/TableRegistrationComponent';
import { CalenderComponent } from '../../shared/admin';
import {
  HeaderAdLayout,
  SideAdLayout
} from '../../layouts/home/admin';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';
var dateFormat = require('dateformat');

class RegistrationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      views: 'TABLE',
      isFilter: false
    }
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetRegistrationStore());
    this.props.dispatch(action.requestGetUserStore());
    this.props.dispatch(action.requestGetTeamStore());
  }

  onSearch = (data) => {
    this.props.dispatch(action.requestSearchRegistrationStore(data));
    this.setState({
      isFilter: true
    })
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
          email: item.attributes.user.name
        }
      })
    } else {
      return [];
    }
  }
  // translateAtTime(data) {
  //   switch (data) {
  //     case "Full":
  //       return "Cả ngày"
  //     case "Morning":
  //       return "Buổi sáng"
  //     case "Afternoon":
  //       return "Buổi chiều"
  //     default:
  //       break;
  //   }
  // }

  covertArrayNew(data) {
    let ItemNew = [];
    data.map(item => {
      ItemNew = item.attributes.time.map(timeItem => {
        return {
          id: timeItem.id,
          title: timeItem.at_time,
          date: dateFormat(timeItem.time_details, 'yyyy-mm-dd'),
          email: item.attributes.user.name
        }
      })
      return [];
    })
    return ItemNew;
  }

  render() {
    console.log(this.props.filter)
    const mainContent = () => {
      switch (this.state.views) {
        case "CALENDER":
          return (
            <CalenderComponent data={this.covertArrayNew(this.props.filter)} onhandleShow={this.onhandleShow} />
          )
        case "TABLE":
          return (
            <TableRegistrationComponent onDetails={this.onDetails} team={this.props.team} onhandleShow={this.onhandleShow}
              data={this.state.isFilter ? this.props.filter : this.props.registration} user={this.props.stores}
              onSearch={this.onSearch} />
          )
        default:
          return null
      }
    }
    return (
      <div>
        <HeaderAdLayout />
        <div className="content">
          <SideAdLayout />
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
    filter: state.registration.filter,
    team: state.team.all
  }
}

export default connect(mapPropsToState, null)(RegistrationPage);