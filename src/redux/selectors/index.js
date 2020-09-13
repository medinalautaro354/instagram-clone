import {get} from 'lodash';

export const isLoginLoading = state => get(state, 'login.isLoginLoading');
export const loginResult = state => get(state, 'login.loginResult');

export const isSignUpLoading = state => get(state, 'signup.isSignUpLoading');
export const signUpResult = state => get(state, 'signup.signUpResult');