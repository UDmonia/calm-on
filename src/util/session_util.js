import axios from "axios";

const baseURL = 'http://dev-1020237653.us-west-1.elb.amazonaws.com/api/accounts/';

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) => {
    console.log(user)
    const payload = {
      email: user.email,
      name: "Name",
      birthDate: new Date("2011", "01", "01"),
      //coach?: string;
      credential: {
        username: user.email,
        password: user.password
      }
    };
    return axios.post(`${baseURL}/signup`, payload)
  },
  login: (user) => {
    console.log(user)
    axios.post(`${baseURL}/login`, user)
  },
  addName: (user) => {
    console.log(user)
    const payload = {
      name: user.name
    }
    axios.put(`${baseURL}/profile`, payload)
  },
  checkin: (user) => {
    console.log('checkin')
    axios.put(`http://localhost:3001/api/users/checkin`, user)
  },
};

export default SessionAPI;
