import React, { Component } from 'react';

class HeaderAdLayout extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="b-header">
          <div className="p-logo">
            <a href="/"><img src="/static/media/logo-light.855d4a19.svg" alt="true" /></a>
          </div>
          <div className="p-user-profile">
            <ul className="profile">
              {/* <li className="item-profile"><a href="@" className="link-profile"><i className="fas fa-sort-down" /></a></li> */}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderAdLayout;