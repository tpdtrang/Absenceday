import * as types from '../constants/actionTypes';
const INITIAL_STATE = {
  all: []
}
function convertData (data){
  return data.map(item =>{
    return{
      "type": "TimeAbsence",
      "id": item.id,
      "attributes":{
        "registration_id": null,
        "type": null,
        "at_time":item.at_time,
        "time_details":item.time_details,
        "absence_days":item.absence_days,
        "current_year":null,
        "general_information":null,
        "created_at":null,
        "updated_at":null,
        "deleted_at":null
      }
    }
  })
}
export default function store(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.GET_DATETODATE:
      console.log(action.payload);
      return Object.assign({}, state, {
        all: action.payload
      })
    case types.SEARCH_DATETODATE:
      return Object.assign({}, state, {
        all: convertData(action.payload)
      })
    default:
      return state
  }
}