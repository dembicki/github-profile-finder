import produce from "immer";
import types from "./types";

const INITIAL_STATE = {
  history: [],
};

const factorialReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_HISTORY:
      draft.history.push({ input: action.input, output: action.output });
      return draft;
    default:
      return draft;
  }
});

export default factorialReducer;
