import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableContentComponent from '../../shared/admin/TableContentComponent'
class ContentPage extends Component {
  render() {
    
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          <TableContentComponent ></TableContentComponent>
        </div>
      </div>
    );
  }
}

export default ContentPage;