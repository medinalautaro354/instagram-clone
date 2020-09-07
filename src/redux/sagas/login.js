import {put, call, takeLatest} from 'redux-saga/effects';
import {POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_COMPLETE} from '../actions/types';

import {apiCall} from '../api/index';
import {LOGIN} from '../../config/endpoints';

export function * postLogin({payload}){
    try{
        const result = yield call(apiCall, LOGIN, payload, null, 'POST');
        yield put({type:POST_LOGIN_COMPLETE, result});
    }catch(error){
        yield put({type: POST_LOGIN_ERROR, error});
    }
}

export default function* login(){
    yield takeLatest(POST_LOGIN, postLogin);
}