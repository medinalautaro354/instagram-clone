import {POST_LOGIN, GET_AUTHENTICATED} from './types';

export const postLogin = (payload) =>({
    type: POST_LOGIN,
    payload
})

export const getAuthenticated = () =>({
    type: GET_AUTHENTICATED
})