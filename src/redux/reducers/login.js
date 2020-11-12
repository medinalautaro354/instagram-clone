import {
    POST_LOGIN,
    POST_LOGIN_ERROR,
    POST_LOGIN_COMPLETE,
  } from "../actions/types";

  const initiateState = {};

  export default function (state = initiateState, action) {
    switch (action.type) {
      case POST_LOGIN: {
        return { ...state, isLoginLoading: true };
      }
  
      case POST_LOGIN_ERROR: {
        return { ...state, isLoginLoading: false, loginResult: action.error.response.data };
      }
  
      case POST_LOGIN_COMPLETE: {
        debugger
        return { ...state, isLoginLoading: false, loginResult: action.result.data };
      }
  
      default:
        return { ...state };
    }
  }