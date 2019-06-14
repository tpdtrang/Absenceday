import React, {Component} from 'react';
// import Cookies from 'universal-cookie';
import {Modal} from 'antd';
import {GoogleLogin} from 'react-google-login';
import * as action from '../../../actions/login';
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
// const cookies = new Cookies();
class HeaderLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            showGoogle: false,
            isRedirect : false
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
    responseGoogle = (data) =>{
        if(data){
            this.props.dispatch(action.requestLogin(data.accessToken));
            this.setState({
                showGoogle: false
            })
        }
    }
    onShowLogin = () =>{
        this.setState({
            showGoogle: true
        })
    }
    render() { 
       
        return (
            
            <header className="b-header-container">
                <div className="container-fluid">
                    <div className="b-header">
                        <div className="img-logo">
                            <a href="login.html" className="link-img">
                                <img className="logo" src="../../images/logo-light.svg" alt="logo"/>
                            </a>
                        </div>
                        
                        <div className="b-logout">
                            <div className="b-admin">
                                <button className="btn-admin" onClick={this.onRedirect}><i className="fas fa-users-cog"></i></button>
                            </div>
                            <button className="btn-logout" onClick={this.onShowLogin}>Đăng Nhập</button>
                            <Modal
                                visible={this.state.showGoogle}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <div className="b-login">
                                    <div className="b-title">
                                        <h1 className="title">Đăng Nhập</h1>
                                    </div>
                                    <div className="b-content">
                                        <GoogleLogin
                                            style={{"width":"100%"}}
                                            clientId={'892644700775-73gunamcbm623v3002opqgpghlfuqudh.apps.googleusercontent.com'}
                                            onSuccess={this.responseGoogle}
                                            // onFailure={responseGoogle}
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
function mapStateToProps(state){
    return{
        login: state.login.user
    }
}
export default connect(mapStateToProps,null)(HeaderLayout);