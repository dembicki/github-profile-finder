import types from "./types";

const INITIAL_STATE = {
  login: "",
  repos: [{
    title: 'test'
  }],
};

const githubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_LOGIN:
      return {
        ...state,
        login: action.payload,
      }
    case types.ADD_REPOS:
      return {
        ...state,
        repos: action.payload,
      }
    default:
      return state;
  }
};

export default githubReducer;
