import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableTrackComponent from '../../shared/admin/TableTrackComponent';
class TrackPage extends Component {
  render() {
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableTrackComponent></TableTrackComponent>
        </div>

      </div>
    );
  }
}

export default TrackPage;