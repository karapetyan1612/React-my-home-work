import { combineReducers } from "redux";
import doctorListReducer from "./doctorListReducer";
import doctorProfileReducer from "./doctorProfileReducer";

const reducers = combineReducers({
  doctors: doctorListReducer,
  doctorProfile: doctorProfileReducer,
});

export default reducers;
