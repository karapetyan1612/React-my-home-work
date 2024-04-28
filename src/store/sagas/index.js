import { takeLatest } from "redux-saga/effects";
import { DoctorListTypes, DoctorsProfileTypes } from "../types";
import doctorsListSaga from "./doctorListSaga";
import doctorsProfileSaga from "./doctorProfileSaga";

function* rootSaga() {
  yield takeLatest(DoctorListTypes.REQUEST, doctorsListSaga);
  yield takeLatest(DoctorsProfileTypes.REQUEST, doctorsProfileSaga);
}

export default rootSaga;
