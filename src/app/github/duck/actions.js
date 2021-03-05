import types from "./types";

export const addLogin = (item) => ({
  type: types.ADD_LOGIN,
  payload: item,
});

export const addRepos = (item) => ({
  type: types.ADD_REPOS,
  payload: item,
});

export default {};
