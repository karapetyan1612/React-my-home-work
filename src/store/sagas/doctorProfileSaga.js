import { call, put } from "redux-saga/effects";
import publicAPI from "../../services/api/publicAPI";
import { doctorsProfileActions } from "../actions";
import userFatches from "../../services/api/userFatches";

function* doctorsProfileSaga(action) {
  try {
    const response = yield call(
      userFatches.get,
      `${action.payload}/?role=doctor`
    );

    yield put(doctorsProfileActions.success(response.data));
  } catch (error) {
    yield put(doctorsProfileActions.error(error.message));
  }
}

export default doctorsProfileSaga;
