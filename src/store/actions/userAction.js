import { UserTypes } from "../types";

function setUser(payload) {
  return {
    type: UserTypes.SetUser,
    payload,
  };
}
function userProf(payload) {
  return {
    type: UserTypes.UserProf,
    payload,
  };
}

export { setUser, userProf };
