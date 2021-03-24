import { RECEIVE_SCORE_ERRORS } from "../actions/session_actions";

const scoreErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SCORE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default scoreErrorsReducer;
