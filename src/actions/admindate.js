import axios from 'axios';
import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import { message } from 'antd';

export function requestGetYearStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/time_absences`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      // console.log(response.data.data);
      dispatch(reciveData(types.GET_DATE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//SEARCH YEAR
export function requestSearchYear(data) {
  let params = {
    'year': data.year,
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      if (response.data && response.data.data.length > 0) {
        dispatch(reciveData(types.SEARCH_DATE, response.data))
      } else {
        message.error("Không có thời gian đăng ki nghỉ trong những ngày này")
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//SEARCH DATETODATE
export function requestSearchDay(data) {
  let params = {
    'from': data.from,
    'to': data.to
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(response => {
      console.log(response.data);
      if (response.data && response.data.data.length > 0) {
        dispatch(reciveData(types.SEARCH_DATE, response.data))
      } else {
        message.error("Không có thời gian đăng ki nghỉ trong những ngày này")
      }
    }).catch(error => {
      console.log(error);
    })
  }
}

//search week
export function requestSearchWeek(data) {
  let params = {
    week: data.week
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(response => {
      console.log(response.data);
      dispatch(reciveData(types.SEARCH_DATE, response.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
//SEARCH MONTH
export function requestSearchMonth(data) {
  let params = {
    'month': data.month
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(response => {
      if (response.data && response.data.data.length > 0) {
        dispatch(reciveData(types.SEARCH_DATE, response.data))
      } else {
        message.error("Không có thời gian đăng ki nghỉ trong tháng này")
      }
    }).catch(error => {
      console.log(error);
    })
  }
}

//chon ngay nghi
export function requestGetDisLicense(data) {
  let paramData = {}
  if (data.type === 'year') {
    paramData = {
      absences: 0,
      year: data.year
    }
  } else {
    paramData = {
      absences: 0,
      month: data.month
    }
  }

  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_DISLICENSEDATE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestGetLicense(data) {
  let paramData = {}
  if (data.type === 'year') {
    paramData = {
      absences: 1,
      year: data.year
    }
  } else {
    paramData = {
      absences: 1,
      month: data.month
    }
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/statistical`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_LICENSEDATE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestFilterDate(data) {
  return (dispatch) => {
    dispatch(reciveData(types.FILTER_REGISTRATION, data))
  }
}

function reciveData(action, payload) {
  return {
    type: action,
    payload
  }

}