import {
  GET_STORIES,
  GET_STORIES_COMPLETE,
  GET_STORIES_ERROR
} from "../actions/types";

const initiateState = {};

export default function (state = initiateState, action) {
  switch (action.type) {
    case GET_STORIES: {
      return { ...state, isStoriesLoading: true };
    }

    case GET_STORIES_ERROR: {
      return { ...state, isStoriesLoading: false, storiesResult: action.error.response.data };
    }

    case GET_STORIES_COMPLETE: {
      return { ...state, isStoriesLoading: false, storiesResult: action.result.data };
    }

    default:
      return { ...state };
  }
}