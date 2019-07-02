import {combineReducers} from 'redux';
import DayoffReducer from './home';
import LoginReducer from './login';
import TypeDayOff from './typedayoff';
import LeadReducer from './teamlead';
import ListQueue from './listqueue';
import ListAccept from './listaccept';
const rootReducer = combineReducers({
    dayoff: DayoffReducer,
    login: LoginReducer,
    typedayoff: TypeDayOff,
    lead: LeadReducer,
    listqueue: ListQueue,
    listaccept: ListAccept,
});
export default rootReducer;