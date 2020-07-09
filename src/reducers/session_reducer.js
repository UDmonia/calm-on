import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_actions";

const sessionReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { user: action.user };
    case LOGOUT_USER:
      return { user: null };
    default:
      return state;
  }
};

export default sessionReducer;
