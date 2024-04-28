import { call, put } from "redux-saga/effects";
import publicAPI from "../../services/api/publicAPI";
import { doctorsProfileActions } from "../actions";

function* doctorsProfileSaga(action) {
  try {
    const response = yield call(
      fetch(`https://api.allodoc.md/users/user/${action.payload}/?role=doctor`)
    );
    yield put(doctorsProfileActions.success(response.data));
  } catch (error) {
    yield put(doctorsProfileActions.error(error.message));
  }
}

export default doctorsProfileSaga;
