import {combineReducers} from 'redux';
import DayoffReducer from './home';
import UserReducer from './user';
import LoginReducer from './login'
const rootReducer = combineReducers({
    dayoff: DayoffReducer,
    user: UserReducer,
    login: LoginReducer
});
export default rootReducer;