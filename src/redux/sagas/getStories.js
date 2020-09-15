import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_STORIES_ERROR, GET_STORIES_COMPLETE, GET_STORIES } from '../actions/types';

import { apiCall, getToken } from '../api/index';
import { STORIES } from '../../config/endpoints';



export function* getstories({ payload }){
    try {
        let headers = {
            AccessToken: yield getToken()
        }
        
        const result = yield call(apiCall, `${STORIES}/0/5`, payload, headers, 'GET');
        yield put({ type: GET_STORIES_COMPLETE, result });
    } catch (error) {
        yield put({ type: GET_STORIES_ERROR, error });
    }
}

export default function* getStories() {
    yield takeLatest(GET_STORIES, getstories);
}