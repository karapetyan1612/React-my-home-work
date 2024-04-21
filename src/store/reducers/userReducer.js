import { UserTypes } from "../types";
const initData = null;
export default function (state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case UserTypes.SetUser:
      return payload;

    default:
      break;
  }
  return state;
}
