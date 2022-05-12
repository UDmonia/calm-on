import SessionAPI from "../util/session_util";
import CheckinAPI from "../util/checkin_util";
import deviceStorage from "../services/device_storage";
import { setupUser, fetchUser } from "./cashShop_actions";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const ADD_SCORE = "ADD_SCORE";
export const RECEIVE_SCORE_ERRORS = "RECEIVE_SCORE";
export const USER_CHECKINS = "USER_CHECKINS";

const setCheckins = (checkIns) => ({
  type: USER_CHECKINS,
  checkIns,
});

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

const getUser = (token, user) => {
  const userJson = JSON.stringify(user);

  try {
    SessionAPI.setAuthToken(token);
    deviceStorage.save("jwt", token);
    deviceStorage.save("user", userJson);
    return user;
  } catch (e) {
    throw new Error("could not save user or token in async storage");
  }
};

export const register = (userLogin) => async (dispatch) => {
  // Todo (jack): we can clean this junk by making the login form better
  delete userLogin.confirmPassword;
  userLogin["birthDate"] = userLogin.birthday;
  delete userLogin.birthday;
  userLogin.credential = {
    username: userLogin.email,
    password: userLogin.password,
  };
  delete userLogin.password;

  try {
    const { data } = await SessionAPI.register(userLogin);
    setupUser(data.data.user._id);
    return dispatch(receiveUser(getUser(data.data.token, data.data.user)));
  } catch (e) {
    dispatch(receiveSessionErrors(e.response.data));
  }
};

export const login = (user) => async (dispatch) => {
  user.username = user.email;
  delete user.email;

  try {
    const userResp = await SessionAPI.login(user);
    fetchUser();
    return dispatch(
      receiveUser(getUser(userResp.data.data.token, userResp.data.data.user))
    );
  } catch (e) {
    dispatch(receiveSessionErrors(e.response.data));
  }
};

// Retrieves token locally and returns the promise
const retrieveToken = () => deviceStorage.get("jwt");

// Calls /profile endpoint to change user info in the Profile tab
export const editProfile = (fields) => async (dispatch) => {
  try {
    const token = await retrieveToken();
    const { data } = await SessionAPI.editProfile(fields);
    return dispatch(receiveUser(getUser(token, data.data.user)));
  } catch (e) {
    dispatch(receiveSessionErrors(e.response.data));
  }
};

export const logout = () => (dispatch) => {
  deviceStorage.delete("user");
  SessionAPI.setAuthToken(false);
  return dispatch(logoutUser());
};

// actually getUserFromDeviceStorage
export const getUserFromJWT = () => async (dispatch) => {
  const promise1 = deviceStorage.get("jwt");
  const promise2 = deviceStorage.get("user");
  var token;
  var userJson;
  try {
    [token, userJson] = await Promise.all([promise1, promise2]);
  } catch (err) {
    dispatch(RECEIVE_SESSION_ERRORS(e));
  }

  const user = JSON.parse(userJson);
  if (user) return dispatch(receiveUser(getUser(token, user)));
};

// Calls /profile endpoint to add name during registration
export const addName = (user) => async (dispatch) => {
  try {
    const token = await retrieveToken();
    const { data } = await SessionAPI.addName(user);
    return dispatch(receiveUser(getUser(token, data.data.user)));
  } catch (e) {
    dispatch(receiveSessionErrors(e.response.data));
  }
};

export const fetchAllCheckins = (userId) => async (dispatch) => {
  try {
    // monthly for now just returns everything for simplicity
    const { data } = await CheckinAPI.getMonthlyCheckins(userId);
    dispatch(setCheckins(data.checkins));
  } catch (e) {
    dispatch(receiveSessionErrors(e));
  }
};

export const submitCheckin = (userId, mood) => async (dispatch) => {
  try {
    const { data } = await CheckinAPI.submitCheckin(userId, mood);
    dispatch(setCheckins(data.checkins));
  } catch (e) {
    dispatch(receiveSessionErrors(e.response.data));
  }
};
