import types from "./types";

const add = (item) => ({
  type: types.ADD_MOVIE,
  item,
});

const reset = (item) => ({
  type: types.RESET_MOVIES,
  item,
});

export const addLogin = (item) => ({
  type: types.ADD_LOGIN,
  payload: item,
});

export const addRepos = (item) => ({
  type: types.ADD_REPOS,
  payload: item,
});

export default {
  add,
  reset,
};
