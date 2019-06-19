import {combineReducers} from 'redux';
import DayoffReducer from './home';
import UserReducer from './user';
import LoginReducer from './login';
import TypeDayOff from './typedayoff'
const rootReducer = combineReducers({
    dayoff: DayoffReducer,
    user: UserReducer,
    login: LoginReducer,
    typedayoff: TypeDayOff,
});
export default rootReducer;