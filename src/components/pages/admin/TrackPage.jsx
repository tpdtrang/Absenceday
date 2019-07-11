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
class TrackPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      view: '1',
      main:false
    }
  }

  onDay = () => {
    this.setState({
      view: '2'
    })
  }
  onYear=()=>{
    this.setState({
     view:'1'
    })
  }

  componentDidMount() {
    this.props.dispatch(action.requestGetTrackStore());
  }

  render() {
    console.log(this.props.data);
    const contentMain = () => {
      if (this.state.view === "1") {
        return (
          <TableTrackComponent data={this.props.track} />
        )
      }
      if(this.state.view === "2"){
        return(
          <ListdatetodateComponent/>
        )
      }
    }

    return (
      <div>
        <HeaderAdLayout />
        <div className="content">
          <SideAdLayout />
          <div className="right-content">
            <MenuListComponent onDay={this.onDay} onYear={this.onYear} />
            {contentMain()}
          </div>
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