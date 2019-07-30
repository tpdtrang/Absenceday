import * as types from '../constants/actionTypes';
import * as API from '../constants/actionAPI';
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export function requestGetTypeDayOff() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/types`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      dispatch(reviceData(types.REQUEST_GET_TYPEDAYOFF, response.data.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function requestGetLead() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/get_mails`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {
      dispatch(reviceData(types.REQUEST_GET_LEAD, response.data.data))
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