import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_AUTHENTICATED, GET_AUTHENTICATED_COMPLETE, GET_AUTHENTICATED_ERROR } from '../actions/types';

import { apiCall } from '../api/index';
import { AUTHENTICATED } from '../../config/endpoints';

export function* authenticated() {
    debugger
    try {
        const result = yield call(apiCall, `${AUTHENTICATED}`, null, null, 'GET');
        yield put({ type: GET_AUTHENTICATED_COMPLETE, result });
    } catch (error) {
        yield put({ type: GET_AUTHENTICATED_ERROR, error });
    }
}

export default function* getAuthenticated() {
    yield takeLatest(GET_AUTHENTICATED, authenticated);
}