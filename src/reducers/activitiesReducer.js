import { NEW_CHECKIN, CHECKINS } from "../actions/activitiesAPI_actions";

const activitiesReducer = (state = { checkIn: null }, action) => {
  switch (action.type) {
    case NEW_CHECKIN:
      return { checkIn: action.checkIn };
    case CHECKINS:
        return {checkIn: action.checkIns}
    default:
      return state;
  }
};

export default activitiesReducer;
