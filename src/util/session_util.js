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
    axios.post(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/signup`, user),
  login: (user) => axios.post(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/signin`, user),
  addName: (user) => axios.put(`http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/profile`, user),
  checkin: (user) => axios.put(`http://localhost:3001/api/users/checkin`, user),
  editProfile: (user) => axios.put('http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/profile', user),
};

export default SessionAPI;
