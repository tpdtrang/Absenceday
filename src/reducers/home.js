import * as types from '../constants/actionTypes'

const INTINIAL_STATE = {
  all: [],
  isList: false
}

export default function (state = INTINIAL_STATE, action = {}) {
  switch (action.type) {
    case types.REQUEST_GET_DAYOFF:
      return Object.assign({}, state, {
        all: action.payload,
        isList: true
      })
    case types.REQUEST_GET_DISDAYOFF:
      return Object.assign({}, state, {
        all: []
      })
    case types.REQUEST_ADD_DAYOFF:
      return Object.assign({}, state, {
        all: [...state.all, action.payload],
      })
    case types.REQUEST_UPDATE_DAYOFF:
      return Object.assign({}, state, {
        all: state.all.map(data => parseInt(data.id) === parseInt(action.payload.id) ? action.payload : data)
      })
    case types.REQUEST_SEARCH:
      return Object.assign({}, state, {
        all: action.payload,
      })
    default:
      return state;
  }
}