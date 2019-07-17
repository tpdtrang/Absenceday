import * as types from '../constants/actionTypes'

const INTINIAL_STATE = {
  all: [],
  filter: []
}

export default function (state = INTINIAL_STATE, action = {}) {
  switch (action.type) {
    case types.REQUEST_GET_REGISTRATION:
      return Object.assign({}, state, {
        all: action.payload,
      })
    case types.REQUEST_FILTER_REGIS:
      return Object.assign({}, state, {
        filter: state.all.filter(item => parseInt(item.id) === parseInt(action.payload))
      })
    default:
      return state;
  }
}