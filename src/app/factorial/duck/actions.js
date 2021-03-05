import types from "./types";

export const addHistory = (input, output) => ({
  type: types.ADD_HISTORY,
  input,
  output,
});

export default {};
