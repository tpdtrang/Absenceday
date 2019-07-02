import * as types from '../constants/actionTypes';
const INITIAL_STATE = {
  all: []
}
export default function store(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.GET_REGISTRATION:
      return Object.assign({}, state, {
        all: action.payload
      })
    default:
      return state
  }
}