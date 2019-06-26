import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {message} from 'antd';
const cookies = new Cookies();
export function requestGetDayOff(){
        return (dispatch)=>{
            return axios.request({
                method: 'GET',
                url: `${API.API_URL}/information/${cookies.get('data') !== undefined ? cookies.get('data').id : ''}`,
                headers: {
                    "Accept" : "application/json",
                    "Content-Type":"application/json",
                },
            }).then(function(response){
                console.log(response.data.data);     
                dispatch(reciveData(types.REQUEST_GET_DAYOFF,response.data.data));
            }).catch(function(error){
                console.log(error);
            })
        }
}
export function requestCreateDayOff(data){
    let dayoff = {}
    if(data.checkType === false){
        dayoff = {
            user_id : cookies.get('data').id,
            type_id : data.typeday,
            time_start : data.time_start,
            time_end : data.time_end,
            note : data.note,
            type: 'From day to day'
        }
    }else{
        dayoff = {
            user_id : cookies.get('data').id,
            type_id : data.typeday,
            date: `${data.date},${data.at_time}`,
            note : data.note,
            type: 'The specific day'
        }
    }
    return (dispatch)=>{
        return axios.request({
            method: 'POST',
            url: `${API.API_URL}/absence`,
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            },
            data: dayoff
        }).then(function(response){ 
            message.success("Bạn đã đăng ký thành công!")
            dispatch(reciveData(types.REQUEST_ADD_DAYOFF,response.data.data))  
        }).catch(function(error){
            console.log(error);
            message.error(" Đăng ký không thành công!")
        })
    }
}
export function requestSearchDay(data){
    let params = {
        'day' : data.day,
    }
    return(dispatch) =>{
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/search`,
            params,
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            }
        }).then(function(response){
            dispatch.reciveData(types.REQUEST_SEARCH, response.data.data)
        }).catch(function(error){
            console.log(error);
        })
    }
}
export function reciveData(aciton,payload){
    return{
        type: aciton,
        payload
    }
}