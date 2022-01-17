import axios from "axios";
import { SESSION_URL } from "@env";

const getUrl = (action) => `${SESSION_URL}/${action}`;

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) => axios.post(getUrl('signup'), user),
  login: (user) => axios.post(getUrl('signin'), user),
  addName: (user) => axios.put(getUrl('profile'), user),
  checkin: (user) => axios.put(`http://localhost:3001/api/users/checkin`, user),
  editProfile: (user) => axios.put(getUrl('profile'), user),
};

export default SessionAPI;
