import axios from "axios";
import { DEV_ADD_CHECKIN } from "@env";

const ActivitiesAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  },

  //Add a checkin event type
  addCheckIn: (checkin) => {
    console.log(checkin);
    axios
      .post(DEV_ADD_CHECKIN, checkin)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  getDaily: () => {
    // console.log(checkInEvent);
   return axios
      .get(
        "http://dev-1020237653.us-west-1.elb.amazonaws.com/api/activities/events/daily?startTimestamp=1636070844081&eventType=CheckIn"
      );
      // .then((res) => {
      //   console.log("fdfsdffgdhgferhfdvhfjhfsjhjhdfjhdsfjdfhdsjfh");
      //   console.log(res.data);
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
  },
};

export default ActivitiesAPI;
