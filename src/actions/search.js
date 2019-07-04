import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
const cookies = new Cookies();
export function requestSearchApproved(data) {
    let params = {
        // 'day': data.day,
        'month':data.month,
        'year':data.year
    }
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/searchapproved`,
            params,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            }
        }).then(function (response) {
            console.log(response.data.data);
            
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
export function requestSearchPending(data) {
    let params = {
        // 'day': data.day,
        'month':data.month,
        // 'year':data.year
    }
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/searchpending`,
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
export function requestSearchDisApproved(data) {
    let params = {
        // 'day': data.day,
        'month':data.month,
        // 'year':data.year
    }
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/searchdisapproved`,
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
export function reciveData(aciton, payload) {
    return {
        type: aciton,
        payload
    }
}