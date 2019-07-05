import React, { Component } from 'react';
import {HeaderAdLayout,SideAdLayout} from '../../layouts/home/admin';

class ContentPage extends Component {
  render() {
    return (
      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <SideAdLayout></SideAdLayout>
      </div>
    );
  }
}

export default ContentPage;