import { combineReducers } from "redux";
import * as doctorListReducer from "./doctorListReducer";
import * as doctorProfileReducer from "./doctorProfileReducer";

const reducers = combineReducers({
  doctors: doctorListReducer,
  doctorProfile: doctorProfileReducer,
});

export default reducers;
