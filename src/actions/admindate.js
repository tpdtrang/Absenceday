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
      dispatch(reciveData(types.GET_DATE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//SEARCH YEAR
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
      
      dispatch(reciveData(types.SEARCH_DATE, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
//SEARCH DATETODATE
export function requestSearchDatetodate(data) {
  let params ={
    'from':data.from,
    'to':data.to
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
      console.log(response);
      dispatch(reciveData(types.SEARCH_DATE,response.data))
    }).catch(function(error){
      console.log(error);
    })
  }
}
//SEARCH MONTH
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
      console.log( response.data);
      dispatch(reciveData(types.SEARCH_DATE, response.data))
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