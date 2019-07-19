import * as types from '../constants/actionTypes';
var dateFormatDate = require('dateformat');
const INITIAL_STATE = {
  all: [],
  filter: []
}
function convertData(data) {
  return data.map(item => {
    return {
      "type": "TimeAbsence",
      "id": item.id,
      "attributes": {
        "registration_id": null,
        "type": {
          "type": item.note
        },
        "name": item.name,
        "at_time": item.at_time,
        "time_details": item.time_details,
        "absence_days": item.absence_days,
        "user": {
          "name": item.name
        },
        "current_year": null,
        "general_information": null,
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
      }
    }
  })
}
export default function store(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.GET_DATE:
      console.log(action.payload);
      return Object.assign({}, state, {
        all: action.payload
      })
    case types.SEARCH_DATE:
      console.log(action.payload.data);
      return Object.assign({}, state, {
        filter: convertData(action.payload.data)
        // filter: action.payload.data
      })
    case types.FILTER_REGISTRATION:
      // console.log(state.all);
      // console.log(dateFormatDate("2019-07-18 12:00", "mm"));
      let dataNew = [];
      if (action.payload.isDate === 'Year') {
        dataNew = state.all.filter(item => item.attributes.current_year === action.payload.value)
      } else if (action.payload.isDate === 'Month') {
        dataNew = state.all.filter(item => dateFormatDate(item.attributes.time_details, 'mm') === action.payload.value)
      }
      return {
        ...state,
        filter: dataNew
      }
    case types.GET_LICENSEDATE:
      console.log(action.payload);
      return Object.assign({}, state, {
        all: convertData(action.payload)
      })
    case types.GET_DISLICENSEDATE:
      console.log(action.payload);
      return Object.assign({}, state, {
        all: convertData(action.payload)
      })
    default:
      return state
  }
}