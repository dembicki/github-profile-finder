import types from "./types";

const add = (item) => ({
  type: types.ADD_MOVIE,
  item,
});

const reset = (item) => ({
  type: types.RESET_MOVIES,
  item,
});

const addData = (item) => ({
  type: types.ADD_DATA,
  item,
})

export default {
  add,
  reset,
};
