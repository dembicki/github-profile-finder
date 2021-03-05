import { combineReducers } from "redux";
import githubReducer from "./app/github/duck";

/* NOT USED RIGHT NOW */

const rootReducer = combineReducers({
  // actors: actorsReducer,
  movies: githubReducer,
});

export default rootReducer;
