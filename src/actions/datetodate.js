import axios from 'axios';
import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes'

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
      dispatch(reciveData(types.SEARCH_DATETODATE,response.data))
    }).catch(function(error){
      console.log(error);
    })
  }
}
export function requestGetDatetodate(data) {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/timeabsence`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_DATETODATE,response.data.data))
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }
}
export function reciveData(action, payload) {
  return {
    type: action,
    payload
  }
}