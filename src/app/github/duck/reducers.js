import types from "./types";

const INITIAL_STATE = {
  login: "dembicki",
};

const githubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        list: [...state.list, action.item],
      };
    case "RESET_MOVIES":
      return {
        ...state,
        list: [],
      };
    case types.ADD_DATA:
      return {
        ...state,

      }
    default:
      return state;
  }
};

export default githubReducer;
