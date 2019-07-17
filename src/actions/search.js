import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
const cookies = new Cookies();
export function requestSearchApprovedDay(data) {
  let params = {
    'day': data.day,
    status: 1
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {


      if (response.data.data.length > 0 && response.data.data[0].attributes.status === 1) {
        dispatch(reciveData(types.REQUEST_SEARCH_APPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchApprovedMonth(data) {
  let params = {
    'month': data.month,
    status: 1
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {


      if (response.data.data.length > 0 && response.data.data[0].attributes.status === 1) {
        dispatch(reciveData(types.REQUEST_SEARCH_APPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchApprovedYear(data) {
  let params = {
    'year': data.year,
    status: 1
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {


      if (response.data.data.length > 0 && response.data.data[0].attributes.status === 1) {
        dispatch(reciveData(types.REQUEST_SEARCH_APPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchPendingDay(data) {
  let params = {
    'day': data.day,
    status: 3
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchPendingMonth(data) {
  let params = {
    'month': data.month,
    status: 3
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchPendingYear(data) {
  let params = {
    'year': data.year,
    status: 3
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchDisApprovedDay(data) {
  let params = {
    'day': data.day,
    status: 2
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_DISAPPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchDisApprovedMonth(data) {
  let params = {
    'month': data.month,
    status: 2
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_DISAPPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchDisApprovedYear(data) {
  let params = {
    'year': data.year,
    status: 2
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/searches`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_DISAPPROVED, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchQueueDay(data) {
  let params = {
    'day': data.day
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/search_regispending`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {
      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_QUEUEACCEPT, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchQueueMonth(data) {
  let params = {
    'month': data.month,
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/search_regispending`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_QUEUEACCEPT, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestSearchQueueYear(data) {
  let params = {
    'year': data.year
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/search_regispending`,
      params,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {

      if (response.data.data.length > 0) {
        dispatch(reciveData(types.REQUEST_SEARCH_QUEUEACCEPT, response.data.data))
      } else {
        message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function reciveData(aciton, payload) {
  return {
    type: aciton,
    payload
  }
}