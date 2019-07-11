import axios from 'axios';
import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';

export function requestGetYearStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/timeabsence`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_YEAR, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestSearchYearStore(data) {
  let params = {
    'year': data.year
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
      dispatch(reciveData(types.SEARCH_YEAR, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}

//month
export function requestGetMonthStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/timeabsence`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_MONTH, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestSearchMonthStore(data) {
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
    }).then(function (response) {
      dispatch(reciveData(types.SEARCH_MONTH, response.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
function reciveData(action, payload) {
  return {
    type: action,
    payload
  }

}