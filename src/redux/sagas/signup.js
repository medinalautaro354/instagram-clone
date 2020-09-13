import {put, call, takeLatest} from 'redux-saga/effects';
import {POST_SIGNUP, POST_SIGNUP_COMPLETE, POST_SIGNUP_ERROR} from '../actions/types';

import {apiCall} from '../api/index';
import {SIGNUP} from '../../config/endpoints';

export function * postSignUp({payload}){
    try{
        const result = yield call(apiCall, SIGNUP, payload, null, 'POST');
        yield put({type:POST_SIGNUP_COMPLETE, result});
    }catch(error){
        yield put({type: POST_SIGNUP_ERROR, error});
    }
}

export default function* signup(){
    yield takeLatest(POST_SIGNUP, postSignUp);
}