import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
// import {message} from 'antd';
export function requestGetDayOff(){
    return (dispatch)=>{
        return axios.request({
            method: 'GET',
            url: `${API.API_URL}/absence`,
            headers: {
                "Accept" : "application/json",
                "Content-Type":"application/json"
            }
        }).then(function(response){
            dispatch(reciveData(types.REQUEST_GET_DAYOFF,response.data.data))
        }).catch(function(error){
            console.log(error);
            
        })
    }
}
// export function requestCreateDayOff(data){
//     let day = null;
//     day = {
//         thoigianDK : data.thoigianDK,
//         thoigianBD : data.thoigianBD,
//         thoigianKT : data.thoigianKT,
//         hinhthuc : data.hinhthuc,
//         theloai : data.theloai,
//         lydo : data.lydo,
//         pheduyet: data.pheduyet
//     }
//     return (dispatch)=>{
//         return axios.request({
//             method: 'POST',
//             url: `${API.API_URL}/data`,
//             headers: {
//                 "Accept":"application/json",
//                 "Content-Type":"application/json"
//             },
//             data: day
//         }).then(function(response){
//             message.success("Bạn đã đăng ký thành công!")
//             dispatch(reciveData(types.REQUEST_ADD_DAYOFF,response.data))
//         })
//     }
// }
export function reciveData(aciton,payload){
    return{
        type: aciton,
        payload
    }
}