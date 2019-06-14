import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import * as action from '../../../actions/login';
import {connect} from 'react-redux'
// import { message } from 'antd';
// const cookies = new Cookies();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false,
            isRedirect: false,
        }
    }
   
    onChanger = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // onLogin(){
    //     if(cookies.get('data') !== undefined){
    //         if(cookies.get("error").errors.title === "AuthenticateError" && cookies.get("error").errors.detail === "Invalid_email_or_password"){
    //             this.onMessage();
    //         }else{
    //             this.props.dispatch(action.requestLogin(this.state));
    //             this.setState({
    //                 isRedirect: true
    //             })
    //         }
    //     }
    // }
    // onSubmit = (e) =>{
    //     e.preventDefault();
    //     this.onLogin();
    // } 
    // onMessage(){
    //     message.error("Đăng nhập bị lỗi");
    // }
    render() {
        if(this.state.isRedirect){
            return(
                <Redirect to="/home"></Redirect>
            )
        }
        return (
            <section className="b-page-login">
                <div className="container-fluid">
                    <div className="b-login">
                        <img src="../../images/user.png" className="img-user" alt="user"/>
                        <h1 className="title-login">Đăng Nhập</h1>
                        <form className="form-login" onSubmit={this.onSubmit}>
                            <p className="b-name">Tên đăng nhập:</p>
                            <input
                                type="text"
                                placeholder="Tên đăng nhập"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChanger}/>
                            <p className="b-name">Mật khẩu:</p>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChanger}/>
                            <input type="submit" name defaultValue="Đăng nhập"/>
                            <a href="/" className="link-password">Quên mật khẩu?</a>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.login.user
    }
}
export default connect(mapStateToProps,null)(Login);