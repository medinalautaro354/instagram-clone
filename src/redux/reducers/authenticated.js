import {
    GET_AUTHENTICATED,
    GET_AUTHENTICATED_ERROR,
    GET_AUTHENTICATED_COMPLETE,
} from '../actions/types';

const initiateState = {};

export default function (state = initiateState, action) {
    switch (action.type) {
        case GET_AUTHENTICATED: {
            return { ...state, isAuthenticatedLoading: true }
        }

        case GET_AUTHENTICATED_ERROR: {
            debugger
            console.log(action);
            return { ...state, isAuthenticatedLoading: false, authenticatedResult: action.error }
        }

        case GET_AUTHENTICATED_COMPLETE: {
            debugger
            console.log(action);

            return { ...state, isAuthenticatedLoading: false, authenticatedResult: action }
        }

        default:
            return { ...state };
    }
}