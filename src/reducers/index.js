import { combineReducers } from 'redux';
import DayoffReducer from './home';
import UserReducer from './user';
import LoginReducer from './login';
import TypeDayOff from './typedayoff';
import StoreAdminReducer from './adminreducer';
import AdminTeam from './adminteam'
import AdminPosition from './adminpositon';
import AdminRegistration from './adminregistration';
const rootReducer = combineReducers({
    dayoff: DayoffReducer,
    user: UserReducer,
    login: LoginReducer,
    typedayoff: TypeDayOff,
    stores: StoreAdminReducer,
    team: AdminTeam,
    position: AdminPosition,
    registration: AdminRegistration
});
export default rootReducer;