import {
  RECEIVE_USER,
  RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {};
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
