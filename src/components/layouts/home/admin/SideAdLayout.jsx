import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SideAdLayout extends Component {
  render() {
    return (
      <div className="content">
        <section className="sidebar-container">
          <ul className="sidebar-menu">
            <li className=" item menu-main"><NavLink to="/admin" exact={true} activeClassName="active" className="link-menu"><i className="fas fa-home" /> Trang chủ</NavLink></li>
            {/* <li className="item menu-main"><Link to="/admin" className="link-menu"><i className="fas fa-table" /> Table<span className="p-icon" /></Link></li> */}

            <li className="item menu-drop"><NavLink to="/admin/user" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-users"></i> Quản Lí Người Dùng</NavLink></li>
            <li className="item menu-drop"><NavLink to="/admin/team" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-chalkboard-teacher"></i> Quản Lí Teams</NavLink></li>
            <li className="item menu-drop"><NavLink to="/admin/position" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-crosshairs"></i> Quản Lí Vị Trí</NavLink></li>
            <li className="item menu-drop"><NavLink to="/admin/registration" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-window-restore"></i> Quản Lí Đăng Kí</NavLink></li>
            <li className="item menu-drop"><NavLink to="/admin/track" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-calendar-minus"></i>Quản Lí Thống Kê</NavLink></li>
            {/* <li className="item menu-drop"><NavLink to="/content" exact={true} activeClassName="active" className="link-menu link-drop"><i className="fas fa-calendar-minus"></i>Bảng thống kê đăng kí</NavLink></li> */}
            {/* <li className="item menu-drop"><Link to="/tablerole" className="link-menu link-drop">Table Roles</Link></li>
                <li className="item menu-drop"><Link to="/tabletype" className="link-menu link-drop">Table Types</Link></li> */}


            {/* <li c   lassName="item menu-main"><Link to="/" className="link-menu"><i className="fas fa-user-tie" /> User</Link></li> */}
          </ul>
        </section>
      </div>
    );
  }
}

export default SideAdLayout;