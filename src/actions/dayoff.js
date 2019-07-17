import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
const cookies = new Cookies();
var dateFormatDate = require('dateformat');
export function requestGetDayOff() {
  let paramData = {};
  paramData = {
    status: 3
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/informations`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_GET_DAYOFF, response.data.data));
    }).catch(function (error) {

    })
  }
}
export function requestGetListQueue() {
  let paramData = {};
  paramData = {
    status: 1
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/informations`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_LIST_QUEUE, response.data.data));
    }).catch(function (error) {

    })
  }
}
export function requestGetListDisAccept() {
  let paramData = {};
  paramData = {
    status: 2
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/informations`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_LIST_DISACCEPT, response.data.data));
    }).catch(function (error) {

    })
  }
}
export function requestDisAccept(data) {
  let paramsData = "";
  paramsData = {
    message: data.message
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API_URL}/updated_2/${data.id}`,
      params: paramsData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_UPDATE_DISACCEPT, response.data.data));
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestGetListAccept() {
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

    })
  }
}
export function requestSendAccept(data) {
  let paramsData = "";
  paramsData = {
    message: data.message
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API_URL}/updated_3/${data.id}`,
      params: paramsData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_SEND_ACCEPT, response.data.data));
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestUpdateAccept(data) {
  let paramsData = "";
  paramsData = {
    message: data.message
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API_URL}/updated_1/${data.id}`,
      params: paramsData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${'bearer' + cookies.get('token')}`
      },
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_UPDATE_ACCEPT, response.data.data));
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestGetMail() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API_URL}/mails_cc`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${'bearer' + cookies.get('token')}`
      }
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_GET_MAIL, response.data.data))
    }).catch(function (error) {
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
  data.arrayLead.map((item, i) => {
    if (data.arrayLead.length === 1) {
      dataLead = `${item.namelead}`
    } else {
      if (i === data.arrayLead.length - 1) {
        dataLead += `${item.namelead}`
      } else {
        dataLead += `${item.namelead},`
      }
    }
    return [];
  })
  let dataMail = "";
  data.arrayMail.map((item, i) => {
    if (data.arrayMail.length === 1) {
      dataMail = `${item.namemail}`
    } else {
      if (i === data.arrayMail.length - 1) {
        dataMail += `${item.namemail}`
      } else {
        dataMail += `${item.namemail},`
      }
    }
    return [];
  })
  let dayoff = {}
  if (data.checkType === false) {
    dayoff = {
      user_id: cookies.get('data').id,
      emails: dataLead,
      cc: dataMail,
      type_id: data.typeday,
      time_start: data.time_start,
      time_end: data.time_end,
      note: data.note,
      type: 'Từ ngày đến hết ngày'
    }
  } else {
    dayoff = {
      user_id: cookies.get('data').id,
      emails: dataLead,
      cc: dataMail,
      type_id: data.typeday,
      date: dataArrray,
      note: data.note,
      type: 'Chọn ngày'
    }
  }
  return (dispatch) => {
    return axios.request({
      method: 'POST',
      url: `${API.API_URL}/absences`,
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
export function requestGetDay() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/absences`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application',
      }
    }).then(function (response) {
      dispatch(reciveData(types.REQUEST_GET_REGISTRATION, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestFilterDay(id) {
  return (dispatch) => {
    dispatch(reciveData(types.REQUEST_FILTER_REGIS, id))
  }
}
export function requestUpdateDay(data) {
  let paramData = {}
  if (data.checkType === true) {
    let dataArrray = "";
    if (data.type !== null) {
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
    }
    paramData = {
      type_id: data.typeday,
      date: dataArrray,
      note: data.note,
      type: 'Chọn ngày'
    }
  } else {
    paramData = {
      type_id: data.typeday,
      time_start: dateFormatDate(data.time_start, 'yyyy-mm-dd'),
      time_end: dateFormatDate(data.time_end, 'yyyy-mm-dd'),
      note: data.note,
      type: 'Từ ngày đến hết ngày'
    }
  }
  console.log(paramData)
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API_URL}/absences/${data.id}`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': `${'bearer ' + cookies.get('token')}`
      },
    }).then(function (response) {
      message.success("Bạn đã sửa thành công!")
      dispatch(reciveData(types.REQUEST_UPDATE_DAYOFF, response.data.data));
    }).catch(function (error) {
      console.log(error);
      message.error("Sửa không thành công!")
    })
  }
}

export function reciveData(aciton, payload) {
  return {
    type: aciton,
    payload
  }
}