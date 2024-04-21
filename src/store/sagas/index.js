import userSaga from "./userSaga";

function* rootSaga() {
  yield userSaga();
}

export default rootSaga;
