import * as types from '../constants/actionTypes';
const INITIAL_STATE = {
  all: []
}
export default function store(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.GET_TEAM:
      return Object.assign({}, state, {
        all: action.payload
      })
    case types.ADD_TEAM:
      return Object.assign({}, state, {
        all: [...state.all, action.payload]
      })
    case types.DELETE_TEAM:
      return Object.assign({}, state, {
        all: state.all.filter(item => item.id !== action.payload)
      })
    case types.UPDATE_TEAM:
      return Object.assign({}, state, {
        all: state.all.map(data => parseInt(data.id) === parseInt(action.payload.id) ? action.payload : data)
      })
    default:
      return state
  }
}