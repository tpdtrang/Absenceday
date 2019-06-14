import * as types from '../constants/actionTypes'

const INTINIAL_STATE = {
    all: []
}

export default function (state=INTINIAL_STATE,action={}){
    switch(action.type){
        case types.REQUEST_GET_DAYOFF:
            return Object.assign({},state,{
                all: action.payload
            })
        case types.REQUEST_ADD_DAYOFF:
            return Object.assign({},state,{
                all: [...state.all,action.payload]
            })
        case types.REQUEST_DELETE_DAYOFF:
            return Object.assign({},state,{
                all: state.all.filter(item => item.id !== action.payload)
            })
        case types.REQUEST_UPDATE_DAYOFF:
            return Object.assign({},state,{
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        default:
            return state;
    }
}