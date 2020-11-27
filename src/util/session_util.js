import axios from "axios";

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
      console.log(token)
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },
  register: (user) =>
    axios.post(`http://localhost:3001/api/users/register`, user),
  login: (user) => axios.post(`http://localhost:3001/api/users/login`, user),
  addName: (user) => axios.put(`http://localhost:3001/api/users/name`, user),
  checkin: (user) => axios.put(`http://localhost:3001/api/users/checkin`, user),
  kpiPost : (user) => axios.post('http://localhost:3001/api/users/kpi', user),
  kpiPut : (user) => axios.put('http://localhost:3001/api/users/kpi', user)
};

export default SessionAPI;
