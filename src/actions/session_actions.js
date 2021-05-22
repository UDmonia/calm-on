import jwtDecode from "jwt-decode";

import SessionAPI from "../util/session_util";
import deviceStorage from "../services/device_storage";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const ADD_SCORE = "ADD_SCORE";
export const RECEIVE_SCORE_ERRORS = "RECEIVE_SCORE";

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


const getUser = (token, user) => async {
  console.log("token:  " + token)
  const userJson = JSON.stringify(user)
  console.log("user1:  " + userJson)
  SessionAPI.setAuthToken(token);

  await Promise.all([
    deviceStorage.save("jwt", token),
    deviceStorage.save("user",userJson)
  ]);
  
  return user;
};

export const register = (user) => (dispatch) => async {
  try {
    const res = await SessionAPI.register(user)
    await getUser(res.data.token,res.data.user)
    await dispatch(receiveUser(res.data.user))
  } catch (err) {
    console.log('Error register:', err)
    dispatch(receiveSessionErrors(e.response.data))
  }
}


export const login = (user) => (dispatch) => {
  return SessionAPI.login(user)
    .then((res) => dispatch(receiveUser(getUser(res.data.token, res.data.user))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));
};

export const logout = () => (dispatch) => {
  deviceStorage.delete("user");
  SessionAPI.setAuthToken(false);
  return dispatch(logoutUser());
};
//actually getUserFromDeviceStorage
export const getUserFromJWT = () => async (dispatch) => {
  const promise1 = deviceStorage.get("jwt")
  const promise2 = deviceStorage.get("user")
  var token;
  var userJson;
  try {[token, userJson] = await Promise.all([promise1, promise2])}
  catch (err) {
    dispatch(RECEIVE_SESSION_ERRORS(e))
  }
  console.log("token: " + token)
  console.log("userJson: " + userJson)

  try {
    const user = JSON.parse(userJson)
    if (user) return dispatch(receiveUser(getUser(token, user)))
  } catch (err) { }
}
  // deviceStorage
  //   .get("user")
  //   .then((userJson) => {
  //     //const decodedJwt = jwtDecode(token);
  //     const user = JSON.parse(userJson)
  //     if (user) return dispatch(receiveUser(user));
  //   })
  //   .catch((e) => console.log(e));

export const addName = (user) => (dispatch) =>
  SessionAPI.addName(user)
    .then((res) => dispatch(receiveUser(getUser(res.data.token, res.data.user))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const checkin = (checkinDTO) => (dispatch) => 
  SessionAPI.checkin(checkinDTO)
  .then((res) => dispatch(receiveUser(getUser(res.data.token,res.data.user))))
  .catch((e) => dispatch(receiveSessionErrors(e.response.data)));