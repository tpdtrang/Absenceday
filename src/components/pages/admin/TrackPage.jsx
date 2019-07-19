import React, { Component } from 'react';
import {
  HeaderAdLayout,
  SideAdLayout
} from '../../layouts/home/admin';
import {
  TableTrackComponent,
  ListdatetodateComponent,
  MenuListComponent
} from '../../shared/admin/listtrack';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';
import * as actionYear from '../../../actions/admindate';
// const today = new Date();
class TrackPage extends Component {
  constructor(props, context) {
    super(props, context);
    // var today = new Date(),
    //         date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // var tempDate = new Date();
    // var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' '
    //   + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
    // console.log(date);

    this.state = {
      view: '1',
      isFilter: false,
      // date: date
    }
  }

  onDay = () => {
    this.setState({
      view: '2'
    })
  }
  onHome = () => {
    this.setState({
      view: '1'
    })
  }


  onFilter = (data) => {
    this.props.dispatch(actionYear.requestFilterDate(data));
    this.setState({
      isFilter: true
    })
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetTrackStore());
    this.props.dispatch(actionYear.requestGetYearStore());
  }

  onDislicense = () => {
    this.props.dispatch(action.requestGetDisLicense());
    this.props.dispatch(actionYear.requestGetDisLicense());
    this.setState({
      view: '1'
    })
  }
  onLicense = () => {
    this.props.dispatch(action.requestGetLicense());
    this.props.dispatch(actionYear.requestGetLicense());
  }

  onLicenseDate = () => {
    this.props.dispatch(actionYear.requestGetLicense());
  }

  onDislicenseDate = () => {
    this.props.dispatch(actionYear.requestGetDisLicense());


  }

  onSearchDate = (data) => {
    this.props.dispatch(actionYear.requestSearchDatetodate(data));
  }

  onSearchYear = (data) => {
    this.props.dispatch(actionYear.requestSearchYearStore(data));
    console.log(data);
  }

  onSearchMonth = (data) => {
    this.props.dispatch(actionYear.requestSearchMonthStore(data));
  }

  render() {
    const contentMain = () => {
      if (this.state.view === "1") {
        return (
          <TableTrackComponent data={this.props.track} onDislicense={this.onDislicense} onLicense={this.onLicense} />
        )
      }
      if (this.state.view === "2") {
        return (
          <ListdatetodateComponent
            data={this.state.isFilter ? this.props.filter : this.props.searchdate}
            onSearchDate={this.onSearchDate}
            onSearchYear={this.onSearchYear}
            onSearch={this.onSearchMonth}
            onFilter={this.onFilter}
            onDislicenseDate={this.onDislicenseDate}
            onLicenseDate={this.onLicenseDate}

          />
        )
      }
    }

    return (
      <div>
        <HeaderAdLayout />
        <div className="content">
          <SideAdLayout />
          <div className="right-content">
            <MenuListComponent onDay={this.onDay} onHome={this.onHome} />
            {contentMain()}
          </div>
        </div>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    track: state.track.all,
    searchdate: state.searchdate.all,
    filter: state.searchdate.filter
  }
}
export default connect(mapPropsToState)(TrackPage);