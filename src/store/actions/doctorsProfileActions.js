import * as DoctorProfileTypes from "../types/doctorProfileTypes";

function success(data) {
  return {
    type: DoctorProfileTypes.SUCCESS,
    payload: data,
  };
}
function get(id) {
  return {
    type: DoctorProfileTypes.REQUEST,
    payload: id,
  };
}

function error(error) {
  return {
    type: DoctorProfileTypes.REJECT,
    payload: error,
  };
}

export { success, get, error };
