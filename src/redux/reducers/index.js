import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import getStories from './getStories'

export default combineReducers({
    login,
    signup,
    getStories
});