import {get} from 'lodash';

export const isLoginLoading = state => get(state, 'login.isLoginLoading');
export const loginResult = state => get(state, 'login.loginResult');
