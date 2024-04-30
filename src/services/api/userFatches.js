import axios from "axios";

const userFatches = axios.create({
  baseURL: `https://api.allodoc.md/users/user/`,
});

export default userFatches;
