import produce from "immer";
import types from "./types";

// const INITIAL_STATE = {
//   login: "",
//   repos: [{}],
//   commits: [{}],
// };

const githubReducer = produce((draft = {}, action) => {
  switch (action.type) {
    case types.ADD_LOGIN:
      draft.login = action.payload;
      return draft;
    case types.ADD_REPOS:
      draft.repos = action.payload;
      return draft;
    case types.ADD_COMMITS:
      draft.commits = action.payload;
      return draft;
    default:
      return draft;
  }
});

export default githubReducer;
