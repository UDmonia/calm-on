import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import scoreReducer from "./score_reducer";
import activitiesReducer from "./activitiesReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  score: scoreReducer,
  activities: activitiesReducer,
});

export default rootReducer;
