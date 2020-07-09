import axios from "axios";

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) =>
    axios.post(`http://localhost:3001/api/users/register`, user),
  login: (user) => axios.post(`http://localhost:3001/api/users/login`, user),
};

export default SessionAPI;
