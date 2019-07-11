import * as types from '../constants/actionTypes';

const INTINIAL_STATE = {
  all: []
};

export default function (state = INTINIAL_STATE, action = {}) {
  switch (action.type) {
    case types.REQUEST_GET_MAIL:
      return Object.assign({}, state, {
        all: action.payload
      })
    default:
      return state;
  }
}
