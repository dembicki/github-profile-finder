import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import githubReducer from "./app/github/duck";
// import rootReducer from "./reducers";
// import thunk from "redux-thunk";

const store = createStore(githubReducer, composeWithDevTools());

export default store;
