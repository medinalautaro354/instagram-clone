import { GET_STORIES } from './types';

export const getStories = (payload) =>({
    type: GET_STORIES,
    payload
})