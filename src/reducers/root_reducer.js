import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import scoreReducer from "./score_reducer";
import cashShopReducer from "./cashShopReducer"

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  score: scoreReducer,
  cashShop: cashShopReducer
});

export default rootReducer;
