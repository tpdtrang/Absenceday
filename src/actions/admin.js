import * as API from '../constants/actionAPI';
import * as types from '../constants/actionTypes';
import axios from 'axios';
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
  console.log(data);

  let store = null;
  store = {
    team_id: data.team_id,
    position_id: data.position_id,
    name: data.name,
    phone: data.phone,
    address: data.address,
    first_workday: data.first_workday,
    email: data.email,
    // role: data.role,
    password: '1121212'
  }
  console.log(store);
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
      // console.log(response.data);
      dispatch(reciveData(types.ADD_STORE, response.data.data))
    }).catch(function (error) {
      console.log(error);
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
    role: data.role
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API}/users/${data.id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store
    }).then(function (response) {
      console.log(response.data);
      dispatch(reciveData(types.UPDATE_STORE, response.data.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
//team
export function requestGetTeamStore() {
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
export function requestAddTeamStore(data) {
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
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestDeleteTeamStore(id) {
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
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestUpdateTeamStore(data) {
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
      dispatch(reciveData(types.UPDATE_STORE, response.data.data))
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
    }).catch(function (error) {
      console.log(error);
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
      url: `${API.API}/update_all_users`,
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
      url: `${API.API}/update_all_users`,
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
export function requestAddTrackStore(data) {
  return (dispatch) => {
    return axios.request({
      method: 'POST',
      url: `${API.API}/tracks`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {

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