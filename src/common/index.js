import {combineReducers} from 'redux';
import LoginReducer from './../module/login/store/reducer';

const appReducers = combineReducers({
    login: LoginReducer,
});
export default appReducers;