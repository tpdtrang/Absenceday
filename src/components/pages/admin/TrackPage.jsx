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
import * as actionDate from '../../../actions/admindate';
// const today = new Date();
class TrackPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      view: '1',
      isFilter: false,
      isFiltrack: false
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
    this.props.dispatch(actionDate.requestFilterDate(data))
    this.setState({
      isFilter: true
    })
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetTrackStore())
    this.props.dispatch(actionDate.requestGetYearStore())
  }

  onDislicense = () => {
    this.props.dispatch(action.requestGetDisLicense())
  }

  onPrev = () => {
    this.props.dispatch(action.requestGetTrackStore())

    this.setState({
      view: '1'
    })
  }

  onLicense = () => {
    this.props.dispatch(action.requestGetLicense());
  }

  onLicenseDate = (data) => {
    this.props.dispatch(actionDate.requestGetLicense(data))
  }

  onDislicenseDate = (data) => {
    this.props.dispatch(actionDate.requestGetDisLicense(data))
  }

  onSearchDate = (data) => {
    this.props.dispatch(actionDate.requestSearchDay(data))
  }

  onSearchYear = (data) => {
    this.props.dispatch(actionDate.requestSearchYear(data))
    console.log(data);
  }

  onSearchMonth = (data) => {
    this.props.dispatch(actionDate.requestSearchMonth(data))
  }

  onSearchWeek = (data) => {
    this.props.dispatch(actionDate.requestSearchWeek(data))
  }

  render() {
    // console.log(this.state.view);
    const contentMain = () => {
      if (this.state.view === "1") {
        return (
          <TableTrackComponent
            data={this.props.track}
            onPrev={this.onPrev}
            onDislicense={this.onDislicense}
            onLicense={this.onLicense} />
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
            onSearchWeek={this.onSearchWeek}
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