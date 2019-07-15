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
    this.props.dispatch(actionYear.requestGetYearStore());
  }

  onSearchDate = (data) => {
    this.props.dispatch(actionYear.requestSearchDatetodate(data));
  }

  onSearchYear = (data) => {
    this.props.dispatch(actionYear.requestSearchYearStore(data));
  }

  onSearchMonth = (data) => {
    this.props.dispatch(actionYear.requestSearchMonthStore(data));
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
          <ListdatetodateComponent data={this.props.searchdate} onSearchDate={this.onSearchDate}
             onSearchYear={this.onSearchYear}
            onSearch={this.onSearchMonth}
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
    
  }
}
export default connect(mapPropsToState)(TrackPage);