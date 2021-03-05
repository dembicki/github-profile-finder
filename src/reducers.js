import { combineReducers } from "redux";
import factorialReducer from "./app/factorial/duck";
import githubReducer from "./app/github/duck";

/* NOT USED RIGHT NOW */

const rootReducer = combineReducers({
  github: githubReducer,
  factorial: factorialReducer,
});

export default rootReducer;
