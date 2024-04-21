import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const user = (store) => {
  return (next) => {
    return (actions) => {
      next(actions);
    };
  };
};
const store = createStore(reducers, applyMiddleware(user, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
