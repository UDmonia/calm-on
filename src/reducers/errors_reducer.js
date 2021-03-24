import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";

import scoreErrorsReducer from "./score_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  score: scoreErrorsReducer,
});

export default errorsReducer;
