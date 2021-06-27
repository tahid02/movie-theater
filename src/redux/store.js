import { createStore, combineReducers, applyMiddleware } from "redux";
import { MovieReducer } from "./reducers/MovieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
const combineAllReducer = combineReducers({
  movies: MovieReducer,
});
const store = createStore(combineAllReducer, composeWithDevTools(middleware));
export default store;
