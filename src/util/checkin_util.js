import axios from "axios";
import { CHECKIN_URL } from "@env";

const getUrl = (action) => `${CHECKIN_URL}/${action}`;

const CheckinAPI = {
  submitCheckin: (userId, mood) => {
    return axios.post(getUrl("submitCheckin"), { userId, mood });
  },
  getMonthlyCheckins: (userId) => {
    return axios.get(getUrl("monthly"), { params: { userId } });
  },
  getWeeklyCheckins: (userId) => {
    return axios.get(getUrl("weekly"), { params: { userId } });
  },
};

export default CheckinAPI;
