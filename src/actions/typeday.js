import * as types from '../constants/actionTypes';
import * as API from '../constants/actionAPI';
import axios from 'axios'

export function requestGetTypeDayOff(){
    return (dispatch)=>{
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/type`,
            headers: {
                "Accept" : "application/json",
                "Content-Type":"application/json"
            }
        }).then(function(response){
            dispatch(reviceData(types.REQUEST_GET_TYPEDAYOFF,response.data.data))
        }).catch(function(error){
            console.log(error);
            
        })
    }
}
export function requestGetLead(){
    return (dispatch)=>{
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/teamlead`,
            headers: {
                "Accept" : "application/json",
                "Content-Type":"application/json"
            }
        }).then(function(response){
            dispatch(reviceData(types.REQUEST_GET_LEAD,response.data.data))
        }).catch(function(error){
            console.log(error); 
        })
    }
}
export function reviceData(action,payload){
    return{
        type: action,
        payload
    }
}