import * as types from '../constants/actionTypes';

const INTINIAL_STATE = {
    user: {}
};

export default function (state = INTINIAL_STATE, action ={}){
    switch(action.type){
        case types.REQUEST_LOGIN:
            return Object.assign({},state,{
                user: action.payload
            })
        case types.REQUEST_LOGUOT:
            return Object.assign({},state,{
                user: {}
            })
        default:
            return state;
    }
}
