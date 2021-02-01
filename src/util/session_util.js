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
    axios.post(`http://192.168.1.109:3001/api/users/register`, user),
  login: (user) =>
    axios.post(`http://192.168.1.109:3001/api/users/login`, user),
  addName: (user) =>
    axios.put(`http://192.168.1.109:3001/api/users/name`, user),
  checkin: (user) =>
    axios.put(`http://192.168.1.109:3001/api/users/checkin`, user),
};

export default SessionAPI;
