import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
import { message } from 'antd';
// import { message } from 'antd'
//user
export function requestGetUserStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/users`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      dispatch(reciveData(types.GET_STORE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestAddUserStore(data) {
  let store = null;
  store = {
    team_id: data.team_id,
    position_id: data.position_id,
    name: data.name,
    phone: data.phone,
    address: data.address,
    first_workday: data.first_workday,
    email: data.email,
    password: '1121212'
  }
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: `${API.API}/users`,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      data: store
    }).then(function (response) {
      dispatch(reciveData(types.ADD_STORE, response.data.data))
      message.success("Thêm thành công!")
    }).catch(function (error) {
      if (error.response.data.errors[0].detail === "Trường email đã có trong cơ sở dữ liệu.") {
        message.error("Thêm không thành công - Email đã được dùng!")
      }
      if (error.response.data.errors[0].detail === "Trường phone đã có trong cơ sở dữ liệu.") {
        message.error("Thêm không thành công - Phone đã được dùng!")
      }
    })
  }
}
export function requestDeleteUserStore(id) {
  return (dispatch) => {
    return axios.request({
      method: 'DELETE',
      url: `${API.API}/users/${id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json',
      }
    }).then(function (response) {
      dispatch(reciveData(types.DELETE_STORE, id))
      message.success("Xóa thành công")
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestUpdateUserStore(data) {
  let store = null;
  store = {
    team_id: data.team_id,
    position_id: data.position_id,
    name: data.name,
    phone: data.phone,
    address: data.address,
    first_workday: data.first_workday,
    email: data.email,
    password: '123123',
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API}/users/${data.id}`,
      params: store,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.UPDATE_STORE, response.data.data))
      message.success('Bạn đã sửa  thành công!')
    }).catch(function (error) {
      if (error.response.data.errors[0].detail === "This phone has exist in system, please input another email.") {
        message.error("Sửa không thành công - Số điện thoại đã được dùng!")
      }
      if (error.response.data.errors[0].detail === "This email has exist in system, please input another email.") {
        message.error("Sửa không thành công - Email đã được dùng!")
      }
    })
  }
}
//team
export function requestGetTeam() {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `${API.API}/teams`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      // console.log(response);
      dispatch(reciveData(types.GET_TEAM, response.data.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function requestAddTeam(data) {
  let store = null;
  store = {
    name: data.name,
    description: data.description
  }
  return (dispatch) => {
    return axios.request({
      method: 'POST',
      url: `${API.API}/teams`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store
    }).then(function (response) {
      dispatch(reciveData(types.ADD_TEAM, response.data.data))
      message.success("Thêm thành công")
    }).catch(function (error) {
      message.error("Thêm không thành công")
    })
  }
}
export function requestDeleteTeam(id) {
  return (dispatch) => {
    return axios.request({
      method: 'DELETE',
      url: `${API.API}/teams/${id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.DELETE_TEAM, id))
      message.success("Xóa thành công")
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestUpdateTeam(data) {
  let store = null;
  store = {
    name: data.name,
    description: data.description
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API}/teams/${data.id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store
    }).then(function (response) {
      dispatch(reciveData(types.UPDATE_TEAM, response.data.data));
      message.success('Sửa thành công')
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//position
export function requestGetPositionStore() {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `${API.API}/positions`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_POSITION, response.data.data));
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestAddPositionStore(data) {
  let store = null;
  store = {
    name: data.name,
    description: data.description
  }
  return (dispatch) => {
    return axios.request({
      method: 'POST',
      url: `${API.API}/positions`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store
    }).then(function (response) {
      dispatch(reciveData(types.ADD_POSITION, response.data.data))
      message.success("Thêm thành công")
    }).catch(function (error) {
      message.error("Thêm không thành công")
    })
  }
}
export function requestDeletePositionStore(id) {
  return (dispatch) => {
    return axios.request({
      method: 'DELETE',
      url: `${API.API}/positions/${id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.DELETE_POSITION, id))
      message.success("Xóa thành công")
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function requestUpdatePositionStore(data) {
  let store = null;
  store = {
    name: data.name,
    description: data.description
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API}/positions/${data.id}`,
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      data: store
    }).then(function (response) {
      dispatch(reciveData(types.UPDATE_POSITION, response.data.data))
      message.success("Sửa thành công")
    }).catch(function (error) {
      console.log(error);

    })
  }
}
//permission 
export function requestGetPermissionStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/positions`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_STORE, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
//role
export function requestGetRoleStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/role`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_STORE, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
//registration
export function requestGetRegistrationStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/absences`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application'
      }
    }).then(function (response) {
      // console.log(response.data);  
      dispatch(reciveData(types.GET_REGISTRATION, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//--->search name
export function requestSearchRegistrationStore(data) {
  return (dispatch) => {
    dispatch(reciveData(types.SEARCH_REGISTRATION, data))


  }
}
//TRACK
export function requestGetTrackStore() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/tracks`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_TRACK, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestGetDisLicense() {
  let paramData = {
    absences: 0
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/filters`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_DISLICENSE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

export function requestGetLicense() {
  let paramData = {
    absences: 1
  }
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/filters`,
      params: paramData,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      dispatch(reciveData(types.GET_LICENSE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
// export function requestGetUpdatetrackStore() {
//   return (dispatch) => {
//     return axios.request({
//       method: 'POST',
//       url: `${API.API}/update_all_users`,
//       headers: {
//         "Accept": "application/json",
//         'Content-type': 'application/json'
//       }
//     }).then(function (response) {
//       dispatch(reciveData(types.GET_UPDATE_TRACK))
//     }).catch(function (error) {
//       console.log(error);

//     })
//   }
// }
// export function requestAddTrackStore(data) {
//   return (dispatch) => {
//     return axios.request({
//       method: 'POST',
//       url: `${API.API}/tracks`,
//       headers: {
//         "Accept": "application/json",
//         'Content-type': 'application/json'
//       }
//     }).then(function (response) {

//     })
//   }
// }
//excel
export function requestGetFileExcel() {
  return (dispatch) => {
    return axios.request({
      method: 'GET',
      url: `${API.API}/exports`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      console.log(response.data);
      dispatch(reciveData(types.GET_EXCEL, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function requestFilterRegister(id) {
  return (dispatch) => {
    dispatch(reciveData(types.FILTER_REGISTER, id))
  }
}

export function reciveData(aciton, payload) {
  return {
    type: aciton,
    payload
  }
}