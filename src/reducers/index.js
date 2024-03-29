import { combineReducers } from 'redux';
import DayoffReducer from './home';
import LoginReducer from './login';
import TypeDayOff from './typedayoff';
import LeadReducer from './teamlead';
import ListQueue from './listqueue';
import ListAccept from './listaccept';
import ListRegisDay from './listregisday'
import StoreAdminReducer from './adminreducer';
import AdminTeam from './adminteam'
import AdminPosition from './adminpositon';
import AdminRegistration from './adminregistration';
import ListDisAccept from './listdisaccept';
import AdminTrack from './admintrack';
import ListMail from './listmail';
import SearchDate from './admindate';
const rootReducer = combineReducers({
    dayoff: DayoffReducer,
    login: LoginReducer,
    typedayoff: TypeDayOff,
    lead: LeadReducer,
    mail: ListMail,
    listqueue: ListQueue,
    listaccept: ListAccept,
    stores: StoreAdminReducer,
    team: AdminTeam,
    position: AdminPosition,
    registration: AdminRegistration,
    disaccept: ListDisAccept,
    track: AdminTrack,
    searchdate: SearchDate,
    listregisday: ListRegisDay
});
export default rootReducer;