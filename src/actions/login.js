import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import { message } from 'antd'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export function requestLogin(data) {
  let token = null;
  token = {
    'token': data.Zi.access_token,
    'email': data.email,
  }
  return (dispatch) => {
    return axios.request({
      method: "POST",
      url: `${API.API_URL}/auth/google`,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      data: token
    }).then(function (response) {
      if (response !== undefined) {
        cookies.set('token', response.data.access_token);
        axios.request({
          method: "GET",
          url: `${API.API_URL}/me`,
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            "Authorization": `${'bearer' + response.data.access_token}`
          },
        }).then(function (response) {
          if (response) {
            cookies.set("data", response.data.data)
            message.success('Đăng nhập thành công')
            dispatch(reviceData(types.REQUEST_LOGIN, response.data.data));
            window.location.reload();
          }
        })
      }
    }).catch(function (error) {
      if (error.response) {
        message.error('Đăng nhập không thành công');
        cookies.remove('accessToken');
      }
    })
  }
}
//logout
export function requestLogout(data) {
  let token = {
    'token': data
  }
  return (dispatch) => {
    return axios.request({
      method: 'POST',
      url: `${API.API_URL}/auth/logout`,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        "Authorization": `${'bearer' + cookies.get('token')}`
      },
      data: token
    }).then(function (response) {
      cookies.remove('token');
      cookies.remove('data');
      cookies.remove('accessToken');
      message.success('Đăng xuất thành công');
      dispatch(reviceData(types.REQUEST_LOGUOT, response));
      // window.location.reload();
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function reviceData(action, payload) {
  return {
    type: action,
    payload
  }
}