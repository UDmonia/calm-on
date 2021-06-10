import axios from "axios";
import config from "../../config"

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) =>
    axios.post(`${config.API_ACCOUNTS_URL}/api/accounts/signup`, user),
  login: (user) => axios.post(`${config.API_ACCOUNTS_URL}/api/accounts/signin`, user),
  addName: (user) => axios.put(`${config.API_ACCOUNTS_URL}/api/accounts/profile`, user),
  checkin: (user) => axios.put(`http://localhost:3001/api/users/checkin`, user),
  editProfile: (user) => axios.put(`http://localhost:3001/api/accounts/profile', user`),
};

export default SessionAPI;
