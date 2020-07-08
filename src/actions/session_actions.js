import jwtDecode from "jwt-decode";

import SessionAPI from "../util/session_util";
import deviceStorage from "../services/device_storage";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const getUser = (res) => {
  const { token } = res;
  SessionAPI.setAuthToken(token);
  deviceStorage.save("jwt", token);
  return jwtDecode(token);
};

export const register = (user) => (dispatch) =>
  SessionAPI.register(user)
    .then((res) => dispatch(receiveUser(getUser(res.data))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const login = (user) => (dispatch) => {
  return SessionAPI.login(user)
    .then((res) => dispatch(receiveUser(getUser(res.data))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));
};

export const logout = () => (dispatch) => {
  deviceStorage.delete("jwt");
  SessionAPI.setAuthToken(false);
  return dispatch(logoutUser());
};
