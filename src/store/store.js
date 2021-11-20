import { createStore, applyMiddleware,  } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import JwtDecode from "jwt-decode";

import rootReducer from "../reducers/root_reducer";
import deviceStorage from "../services/device_storage";
import SessionAPI from "../util/session_util";

const configureStore = () => {
  // const token = await deviceStorage.get("jwt");
  // let preloadedState;

  // if (token) {
  //   SessionAPI.setAuthToken(token);
  //   const user = JwtDecode(token);
  //   preloadedState = {
  //     session: { user },
  //   };
  // }

  return createStore(
    rootReducer,
    // preloadedState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
