import { combineReducers } from "redux";
import userReducer from "./userReducer";
import setReducer from "./setReducer";

const reducers = combineReducers({
  user: userReducer,
  prof: setReducer,
});

export default reducers;
