import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';

class HomeAdmin extends Component {
  render() {
    return (
      <div>
        <HeaderAdLayout />
        <SideAdLayout />
      </div>
    );
  }
}

export default HomeAdmin;