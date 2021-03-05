import types from "./types";

const INITIAL_STATE = {
  history: [],
};

const factorialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_HISTORY:
      return {
        ...state,
        history: [
          ...state.history,
          { input: action.input, output: action.output },
        ],
      };
    default:
      return state;
  }
};

export default factorialReducer;
