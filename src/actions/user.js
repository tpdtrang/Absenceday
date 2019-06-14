import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';

export function requestGetUser(){
    return (dispatch)=>{
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/user`,
            headers: {
                "Accept" : "application/json",
                "Content-Type":"application/json",
            },
        }).then(function(response){
            dispatch(reciveData(types.REQUEST_GET_USER,response.data))
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