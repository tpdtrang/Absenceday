import * as types from '../constants/actionTypes';
const INITIAL_STATE = {
  all: [],
  filter: []
}
export default function store(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.GET_REGISTRATION:
      return Object.assign({}, state, {
        all: action.payload
      })
    case types.FILTER_REGISTER:
      return Object.assign({}, state, {
        filter: state.all.filter(item => parseInt(item.id) === parseInt(action.payload))
      })
    default:
      return state
  }
}