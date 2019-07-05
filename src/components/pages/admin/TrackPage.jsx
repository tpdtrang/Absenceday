import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableTrackComponent from '../../shared/admin/TableTrackComponent';
import { connect } from 'react-redux';
import * as action from '../../../actions/admin';
class TrackPage extends Component {
  componentDidMount() {
    this.props.dispatch(action.requestGetTrackStore());
  }
  render() {    
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableTrackComponent data={this.props.track}></TableTrackComponent>
        </div>

      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    track: state.track.all
  }
}
export default connect(mapPropsToState, null)(TrackPage);