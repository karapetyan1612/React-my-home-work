import * as DoctorListTypes from "../types/doctorListTypes";

const INITIAL_STATE = {
  list: [],
  error: "",
  loading: false,
};
export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorListTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorListTypes.SUCCESS:
      return {
        ...state,
        list: payload,
        error: null,
        loading: false,
      };
    case DoctorListTypes.REJECT:
      return {
        ...state,
        list: [],
        error: payload,
        loading: false,
      };

    default:
      break;
  }
  return state;
}
