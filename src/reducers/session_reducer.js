import {
  RECEIVE_USER,
  LOGOUT_USER,
  USER_CHECKINS,
} from "../actions/session_actions";

const sessionReducer = (state = { user: null, checkIns: [] }, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, user: action.user };
    case LOGOUT_USER:
      return { user: null };
    case USER_CHECKINS:
      return { ...state, checkIns: action.checkIns };
    default:
      return state;
  }
};

export default sessionReducer;
