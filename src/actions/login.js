import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import {message} from 'antd'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export function requestLogin(data){
    let token = null;
    token = {
        'token' : data
    }
    return (dispatch)=>{
        return axios.request({
            method: "POST",
            url: `${API.API_TOKEN}/auth/login`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            data: token
        }).then(function(response){
            if(response !== undefined){
                cookies.set('token',response.data.access_token);
                axios.request({
                    method: "GET",
                    url: `${API.API_TOKEN}/me`,
                    headers: {
                        "Accept": "application/json",
                        'Content-Type': 'application/json',
                        "Authorization": `${'bearer' + response.data.access_token}`
                    },
                }).then(function(response){
                    if(response){
                        cookies.set("data",response.data.data)
                        message.success('Đăng nhập thành công')
                        dispatch(reviceData(types.REQUEST_LOGIN,response.data.data))
                    }
                })
            }
        }).catch(function (error) {
            if (error.response) {
                // console.log(error.response.data);
                cookies.set("error",error.response.data)
            }
        })
    }
}

export function reviceData(action,payload){
    return{
        type: action,
        payload
    }
}