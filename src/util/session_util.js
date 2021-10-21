import axios from "axios";
import { DEV_REGISTER_USER,
         DEV_LOGIN_USER,
         DEV_ADD_NAME,
         DEV_CHECKIN,
         DEV_EDIT_PROFILE} 
         from "@env";
const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) =>
    axios.post(DEV_REGISTER_USER, user),
  login: (user) => axios.post(DEV_LOGIN_USER, user),
  addName: (user) => axios.put(DEV_ADD_NAME, user),
  checkin: (user) => axios.put(DEV_CHECKIN, user),
  editProfile: (user) => axios.put(DEV_EDIT_PROFILE, user),
};

export default SessionAPI;
