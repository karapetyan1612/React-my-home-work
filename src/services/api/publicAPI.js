import axios from "axios";

const publicAPI = axios.create({
  baseURL: "",
});

export default publicAPI;
