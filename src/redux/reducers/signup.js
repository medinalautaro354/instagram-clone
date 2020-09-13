import {
    POST_SIGNUP,
    POST_SIGNUP_ERROR,
    POST_SIGNUP_COMPLETE
  } from "../actions/types";

  const initiateState = {};

  export default function (state = initiateState, action) {
    switch (action.type) {
      case POST_SIGNUP: {
        return { ...state, isSignUpLoading: true };
      }
  
      case POST_SIGNUP_ERROR: {
        return { ...state, isSignUpLoading: false, signUpResult: action.error.response.data };
      }
  
      case POST_SIGNUP_COMPLETE: {
        return { ...state, isSignUpLoading: false, signUpResult: action.result.data };
      }
  
      default:
        return { ...state };
    }
  }