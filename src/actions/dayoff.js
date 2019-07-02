import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
const cookies = new Cookies();
export function requestGetDayOff() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/information/${cookies.get('data') !== undefined ? cookies.get('data').id : ''}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then(function (response) {
            dispatch(reciveData(types.REQUEST_GET_DAYOFF, response.data.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
}
export function requestGetListQueue(){
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/approved/${cookies.get('data') !== undefined ? cookies.get('data').id : ''}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch(reciveData(types.REQUEST_LIST_QUEUE, response.data.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
}
export function requestGetListAccept(){
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/pending`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            },
        }).then(function (response) { 
            dispatch(reciveData(types.REQUEST_LIST_ACCEPT, response.data.data));
        }).catch(function (error) {
            console.log(error);
        })
    }
}
export function requestUpdateAccept(id){
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API.API_URL}/updated/${id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `${'bearer' + cookies.get('token')}`
            },
        }).then(function (response){
            dispatch(reciveData(types.REQUEST_UPDATE_ACCEPT, response.data.data));
        }).catch(function (error){
            console.log(error);
        })
    }
}
export function requestCreateDayOff(data) {
    let dataArrray = "";
    data.arrayNew.map((item, i) => {
        if (data.arrayNew.length === 1) {
            dataArrray = `${item.date},${item.at_time}`
        } else {
            if (i === data.arrayNew.length - 1) {
                dataArrray += `${item.date},${item.at_time}`
            } else {
                dataArrray += `${item.date},${item.at_time};`
            }
        }
        return [];
    })
    let dataLead = "";
    data.arrayLead.map((item,i)=>{
        if (data.arrayLead.length === 1) {
            dataLead = `${item.lead}`
        } else {
            if(i === data.arrayLead.length - 1){
                dataLead += `${item.lead}`
            }else{
                dataLead += `${item.lead},`
            }
        }
        return [];
    })
    let dayoff = {}
    if (data.checkType === false) {
        dayoff = {
            user_id: cookies.get('data').id,
            approver_id: dataLead,
            type_id: data.typeday,
            time_start: data.time_start,
            time_end: data.time_end,
            note: data.note,
            type: 'From day to day'
        }
    } else {
        dayoff = {
            user_id: cookies.get('data').id,
            approver_id: dataLead,
            type_id: data.typeday,
            date: dataArrray,
            note: data.note,
            type: 'The specific day'
        }
    }
    console.log(dataLead);
    
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API.API_URL}/absence`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': `${'bearer' + cookies.get('token')}`
            },
            data: dayoff
        }).then(function (response) {
            message.success("Bạn đã đăng ký thành công!")
            dispatch(reciveData(types.REQUEST_ADD_DAYOFF, response.data.data))
        }).catch(function (error) {
            console.log(error);
            message.error(" Đăng ký không thành công!")
        })
    }
}
export function requestUpdateDay(data){
    let dataArrray = "";
    data.arrayNew.map((item, i) => {
        if (data.arrayNew.length === 1) {
            dataArrray = `${item.date},${item.at_time}`
        } else {
            if (i === data.arrayNew.length - 1) {
                dataArrray += `${item.date},${item.at_time}`
            } else {
                dataArrray += `${item.date},${item.at_time};`
            }
        }
        return [];
    })
    let paramData = {}
    if (data.checkType === false) {
        paramData = {
            type_id: data.typeday,
            time_start: data.time_start,
            time_end: data.time_end,
            note: data.note,
            type: 'From day to day'
        }
    } else {
        paramData = {
            type_id: data.typeday,
            date: dataArrray,
            note: data.note,
            type: 'The specific day'
        }
    }
    console.log(paramData);
    
    return (dispatch) =>{
        return axios.request({
            method: 'PUT',
            url:`${API.API_URL}/absence/${data.id}`,
            params: paramData,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `${'bearer ' + cookies.get('token')}`
            },
        }).then(function(response){
            message.success("Bạn đã sửa thành công!")
            dispatch(reciveData(types.REQUEST_UPDATE_DAYOFF, response.data.data))
        }).catch(function (error) {
            console.log(error);
            message.error("Sửa không thành công!")
        })
    }
}
// export function requestSearchDay(data) {
//     let params = {
//         'day': data.day,
//         // 'month':data.month,
//         // 'year':data.year
//     }
//     return (dispatch) => {
//         return axios.request({
//             method: 'GET',
//             url: `${API.API_URL}/search`,
//             params,
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 'Authorization': `${'bearer' + cookies.get('token')}`
//             }
//         }).then(function (response) {
//             if (response.data.data.length > 0) {
//                 dispatch(reciveData(types.REQUEST_SEARCH, response.data.data))
//             } else {
//                 message.warning('Không có đăng ký nghỉ trong thời gian này !!!');
//             }
            
//         }).catch(function (error) {
//             console.log(error);
//         })
//     }
// }
export function reciveData(aciton, payload) {
    return {
        type: aciton,
        payload
    }
}