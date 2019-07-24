import * as types from '../constants/actionTypes';
import { message } from 'antd'
const INITIAL_STATE = {
  all: [],
  filter: []
}
const filetItems = (array, query) => {
  return array.filter(
    el => el.attributes.user.name.toLowerCase().indexOf(query.toLowerCase()) > -1
  )
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
    case types.SEARCH_REGISTRATION:
      if (filetItems(state.all, action.payload.name).length <= 0) {
        message.error("Không tồn tại tên này")
      }
      return Object.assign({}, state, {
        filter: filetItems(state.all, action.payload.name)
      })
    default:
      return state
  }
}