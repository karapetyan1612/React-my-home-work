import { UserTypes } from "../types";
const initData = null;
export default function (state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case UserTypes.UserProf:
      return payload;

    default:
      break;
  }
  return state;
}
