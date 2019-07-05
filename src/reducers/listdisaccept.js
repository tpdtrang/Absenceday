import * as types from '../constants/actionTypes'

const INTINIAL_STATE = {
    all: []
}

export default function (state=INTINIAL_STATE,action={}){
    switch(action.type){
        case types.REQUEST_LIST_DISACCEPT:
            return Object.assign({},state,{
                all: action.payload
            })
        case types.REQUEST_SEARCH_DISAPPROVED:
            return Object.assign({}, state, {
                all: action.payload,
            })
        default:
            return state;
    }
}