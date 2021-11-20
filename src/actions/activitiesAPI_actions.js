import ActivitiesAPI from "../util/activities_util";
import deviceStorage from "../services/device_storage";

export const NEW_CHECKIN = "NEW_CHECKIN";
export const CHECKINS = "CHECKINS";

export const addCheckin = (checkIn) => ({
  type: NEW_CHECKIN,
  checkIn,
});

export const getCheckIns = (checkIns) => ({
  type: CHECKINS,
  checkIns,
});

export const newCheckIn = () => async (dispatch) => {
    const dummyCheckIn = {
        "eventType": "CheckIn",
        "mood": "sad"
    }
    // console.log("WE are in this part rn  (newcheckin)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    return ActivitiesAPI.addCheckIn(dummyCheckIn);
}

export const getDailyCheckIns = () => async (dispatch) => {
  // const dummyCheckIns = {
  //     "": "CheckIn",
  //     "mood": "sad"
  // }
  // console.log("WE are in this part rn  (getDailyCheckIns)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  return ActivitiesAPI.getDaily().then((res) => {
    // console.log(res.data);
    // console.log(dispatch(getCheckIns(res.data)));
    return dispatch(getCheckIns(res.data));
  });
}
