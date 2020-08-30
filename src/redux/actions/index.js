import {POST_LOGIN} from './types';

export const postLogin = (payload) =>({
    type: POST_LOGIN,
    payload
})