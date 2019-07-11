import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Modal } from 'antd';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import * as action from '../../../actions/login';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import img from '../../../assets/images/logo-light.svg';
const cookies = new Cookies();
class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGoogle: false,
      isRedirect: false,
      isLogout: false,
      isLogoutDrop: false
    }
  }
  handleOk = (e) => {
    this.setState({
      showGoogle: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      showGoogle: false,
    });
  }
  responseGoogle = (data) => {
    console.log(data);

    if (data) {
      this.props.dispatch(action.requestLogin(data));
      cookies.set('accessToken', data.accessToken);
      this.setState({
        showGoogle: false,
        isLogout: false
      })
    }
  }
  onShowLogin = () => {
    this.setState({
      showGoogle: true,
      isLogoutDrop: false
    })
  }
  onCloseLogin = () => {
    this.setState({
      showGoogle: false
    })
  }
  logoutGoogle = () => {
    this.props.dispatch(action.requestLogout(cookies.remove('accessToken')));
    this.setState({
      isLogout: true
    })
  }
  onLogout = () => {
    this.setState({
      isLogoutDrop: !this.state.isLogoutDrop
    })
  }
  render() {

    if (this.state.isRedirect) {
      return (
        <Redirect to="/admin"></Redirect>
      )
    }
    const contentLogin = () => {
      if (cookies.get('data') !== undefined) {
        return (
          <div className="b-dropdown">
            <button className="btn-user" onClick={this.onLogout} style={{ "height": "40px" }}>
              <img src={cookies.get('data').attributes.avatar !== null ? cookies.get('data').attributes.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEt1isQ1nMtBdRADlrCjJFzv_SlgRKklidNseFF59i9RQg0Mt"} alt="avatar"
                style={{ "width": "30px", "margin": "0 5px", "borderRadius": "100%" }} />
              {cookies.get('data').attributes.name}
              {this.state.isLogoutDrop ? <i className="fas fa-chevron-up">&nbsp;</i>
                :
                <i className="fas fa-chevron-down">&nbsp;</i>
              }
            </button>
            {
              this.state.isLogoutDrop ?
                <div className="b-logout">
                  <GoogleLogout
                    clientId={'892644700775-73gunamcbm623v3002opqgpghlfuqudh.apps.googleusercontent.com'}
                    buttonText="Đăng Xuất"
                    onLogoutSuccess={this.logoutGoogle}
                    className="btn-logout"
                    style={{ "cursor": "default" }}
                  >
                  </GoogleLogout>
                </div>
                :
                <></>
            }
          </div>
        )
      } else {
        return (
          <button className="btn-login" onClick={this.onShowLogin}>Đăng Nhập</button>
        )
      }
    }
    const contentLogout = () => {
      if (this.state.isLogout) {
        return (
          <button className="btn-login" onClick={this.onShowLogin}>Đăng Nhập</button>
        )
      } else {
        return <>
          {contentLogin()}
        </>
      }
    }
    return (

      <header className="b-header-container">
        <div className="container-fluid">
          <div className="b-header">
            <div className="img-logo">
              <a href="/admin" className="link-img">
                <img className="logo" src={img} alt="logo" />
              </a>
            </div>
            <div className="b-login">
              <div className="b-admin">
                <button className="btn-admin" onClick={this.onRedirect}><i className="fas fa-users-cog"></i></button>
              </div>
              {contentLogout()}
              <Modal
                visible={this.state.showGoogle}
                onOk={this.handleOk}
                closable={false}
                footer={null}
              >
                <div className="google-login">
                  <div className="b-title">
                    <h1 className="title">Đăng Nhập</h1>
                    <button onClick={this.onCloseLogin}><i className="fas fa-times"></i></button>
                  </div>
                  <div className="b-content">
                    <GoogleLogin
                      style={{ "width": "100%" }}
                      clientId={'892644700775-73gunamcbm623v3002opqgpghlfuqudh.apps.googleusercontent.com'}
                      onSuccess={this.responseGoogle}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
function mapStateToProps(state) {
  return {
    login: state.login.user
  }
}
export default connect(mapStateToProps, null)(HeaderLayout);