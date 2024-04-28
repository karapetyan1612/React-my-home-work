import * as DoctorListTypes from "../types/doctorListTypes";

function success(list) {
  return {
    type: DoctorListTypes.SUCCESS,
    payload: list,
  };
}
function get(category) {
  return {
    type: DoctorListTypes.REQUEST,
    payload: category,
  };
}
function error(error) {
  return {
    type: DoctorListTypes.REJECT,
    payload: error,
  };
}

export { success, get, error };
