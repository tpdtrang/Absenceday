import React, { Component } from 'react';
import {
  HeaderAdLayout,
  SideAdLayout
} from '../../layouts/home/admin';
import {
  TableTrackComponent,
  ListdatetodateComponent,
  MenuListComponent,
  ListYearComponent,
  ListMonthComponent
} from '../../shared/admin/listtrack';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';
import * as actionDate from '../../../actions/datetodate';
import * as actionYear from '../../../actions/adyear';
class TrackPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      view: '1',
      main: false
    }
  }

  onDay = () => {
    this.setState({
      view: '2'
    })
  }
  onYear = () => {
    this.setState({
      view: '4'
    })
  }
  onHome = () => {
    this.setState({
      view: '1'
    })
  }
  onMonth = () => {
    this.setState({
      view: '3'
    })
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetTrackStore());
    this.props.dispatch(actionDate.requestGetDatetodate());
    this.props.dispatch(actionYear.requestGetYearStore());
    this.props.dispatch(actionYear.requestGetMonthStore());
  }
  onSearchDate = (data) => {
    this.props.dispatch(actionDate.requestSearchDatetodate(data));
    this.setState({
      view: '2'
    })
  }

  onSearchYear = (data) => {
    this.props.dispatch(actionYear.requestSearchYearStore(data));
    this.setState({
      view: '4'
    })
  }

  onSearchMonth = (data) => {
    this.props.dispatch(actionYear.requestSearchMonthStore(data));
    this.setState({
      view: '3'
    })
  }
  render() {
    const contentMain = () => {
      if (this.state.view === "1") {
        return (
          <TableTrackComponent data={this.props.track} />
        )
      }
      if (this.state.view === "2") {
        return (
          <ListdatetodateComponent data={this.props.statistical} onSearchDate={this.onSearchDate} />
        )
      }
      if (this.state.view === "3") {
        return (
          <ListMonthComponent data={this.props.searchmonth} onSearch={this.onSearchMonth} />
        )
      }
      if (this.state.view === "4") {
        return (
          <ListYearComponent data={this.props.searchyear} onSearch={this.onSearchYear} />
        )
      }
    }

    return (
      <div>
        <HeaderAdLayout />
        <div className="content">
          <SideAdLayout />
          <div className="right-content">
            <MenuListComponent onDay={this.onDay} onYear={this.onYear} onHome={this.onHome} onMonth={this.onMonth} />
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
    statistical: state.statistical.all,
    searchyear: state.searchyear.all,
    searchmonth: state.searchmonth.all
  }
}
export default connect(mapPropsToState)(TrackPage);