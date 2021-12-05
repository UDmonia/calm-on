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
  register: async (user) =>
    await axios.post(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/signup`, user),
  login: async (user) => await axios.post(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/signin`, user),
  addName: (user) => axios.put(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/profile`, user),
  checkin: (user) => axios.put(`http://localhost:3001/api/users/checkin`, user),
  editProfile: (user) => axios.put('http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/profile', user),
};

export default SessionAPI;
