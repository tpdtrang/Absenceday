import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class SiderLayout extends Component {

  render() {
    const contentLogin = () => {
      if (cookies.get("data") !== undefined) {
        return (
          <div
            className="b-profile"
            key={cookies
              .get("data")
              .id}>
            <img className="img-user" src="../../images/user.png" alt="user" />
            <div className="b-information">
              <h1 className="b-title">Họ tên:</h1>
              <span className="b-text">{cookies
                .get("data")
                .attributes
                .name}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Số ĐT:</h1>
              <span className="b-text">{cookies
                .get("data")
                .attributes
                .phone}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Quê quán:</h1>
              <span className="b-text">{cookies
                .get("data")
                .attributes
                .address}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Đội:</h1>
              <span
                className="b-text"
                key={cookies
                  .get("data")
                  .attributes
                  .team
                  .id}>{cookies
                    .get("data")
                    .attributes
                    .team
                    .name}</span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Khối:</h1>
              <span
                className="b-text"
                key={cookies
                  .get("data")
                  .attributes
                  .position
                  .id}>{cookies
                    .get("data")
                    .attributes
                    .position
                    .name}</span>
            </div>
          </div>
        )
      } else {
        return (
          <div className="b-profile">
            <img className="img-user" src="../../images/user.png" alt="user" />
            <div className="b-information">
              <h1 className="b-title">Họ tên:</h1>
              <span className="b-text"></span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Số ĐT:</h1>
              <span className="b-text"></span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Quê quán:</h1>
              <span className="b-text"></span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Đội:</h1>
              <span className="b-text"></span>
            </div>
            <div className="b-information">
              <h1 className="b-title">Khối:</h1>
              <span className="b-text"></span>
            </div>
          </div>
        )
      }
    }
    return (
      <section className="b-siderbar-container">
        <div className="b-siderbar">
          {contentLogin()}
        </div>
      </section>
    );
  }
}

export default SiderLayout;