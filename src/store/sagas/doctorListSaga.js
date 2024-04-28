import { call, put } from "redux-saga/effects";
import publicAPI from "../../services/api/publicAPI";
import { doctorsListActions } from "../actions";

function* doctorsListSaga(action) {
  try {
    const response = yield call(
      publicAPI.get,
      `/?page=1&category=${action.payload}`
    );

    yield put(doctorsListActions.success(response.data.results));
  } catch (error) {
    yield put(doctorsListActions.error(error.message));
  }
}

export default doctorsListSaga;
