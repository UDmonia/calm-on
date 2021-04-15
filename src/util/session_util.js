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
    axios.post(
      `http://ubuntu@ec2-34-217-83-75.us-west-2.compute.amazonaws.com/api/users/register`,
      user
    ),
  login: (user) =>
    axios.post(
      `http://ubuntu@ec2-34-217-83-75.us-west-2.compute.amazonaws.com/api/users/login`,
      user
    ),
  addName: (user) =>
    axios.put(
      `http://ubuntu@ec2-34-217-83-75.us-west-2.compute.amazonaws.com/api/users/name`,
      user
    ),
  checkin: (user) =>
    axios.put(
      `http://ubuntu@ec2-34-217-83-75.us-west-2.compute.amazonaws.com/api/users/checkin`,
      user
    ),
};

export default SessionAPI;
