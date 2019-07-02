import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom'

class SideAdLayout extends Component {
  render() {
    return (
      <div className="content">
        <section className="sidebar-container">
          <ul className="sidebar-menu">
            <li className=" item menu-main"><NavLink to="/admin" activeClassName="active" className="link-menu"><i className="fas fa-home" /> Trang chủ</NavLink></li>
            {/* <li className="item menu-main"><Link to="/admin" className="link-menu"><i className="fas fa-table" /> Table<span className="p-icon" /></Link></li> */}

            <li className="item menu-drop"><NavLink to="/tableuser" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-users"></i> Bảng Người dùng</NavLink></li>
            <li className="item menu-drop"><NavLink to="/tableteam" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-chalkboard-teacher"></i> Table Teams</NavLink></li>
            <li className="item menu-drop"><NavLink to="/tableposition" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-crosshairs"></i> Bảng Vị trí</NavLink></li>
            <li className="item menu-drop"><NavLink to="/tableregistration" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-window-restore"></i> Bảng Đăng kí</NavLink></li>
            {/* <li className="item menu-drop"><Link to="/tablepermission" className="link-menu link-drop">Table Permissions</Link></li>
                <li className="item menu-drop"><Link to="/tablerole" className="link-menu link-drop">Table Roles</Link></li>
                <li className="item menu-drop"><Link to="/tabletype" className="link-menu link-drop">Table Types</Link></li> */}


            {/* <li c   lassName="item menu-main"><Link to="/" className="link-menu"><i className="fas fa-user-tie" /> User</Link></li> */}
          </ul>
        </section>
      </div>
    );
  }
}

export default SideAdLayout;