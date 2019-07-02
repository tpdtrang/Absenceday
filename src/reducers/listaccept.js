import * as types from '../constants/actionTypes'

const INTINIAL_STATE = {
    all: []
}

export default function (state=INTINIAL_STATE,action={}){
    switch(action.type){
        case types.REQUEST_LIST_ACCEPT:
            return Object.assign({},state,{
                all: action.payload
            })
        case types.REQUEST_UPDATE_ACCEPT:
            return Object.assign({},state,{
                all: state.all.filter(item => parseInt(item.id) !== parseInt(action.payload[0].id))
            })
        default:
            return state;
    }
}